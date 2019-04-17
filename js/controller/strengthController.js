let deadliftController = (() => {
    function deadliftIndex() {
        var EMPTY = 0;
        var GENDER_MALE = 1;
        var GENDER_FEMALE = 2;

        var genders = [
            [0, ''],
            [GENDER_MALE, 'Male'],
            [GENDER_FEMALE, 'Female']
        ];

        var prefills = [
            ['height', 140, 206, 1, true],
            ['weight', 40, 173, 1, true],
            ['deadlift', 40, 500, 2.5, true],
            ['reps', 1, 10, 1, false]
        ];

        var genderWorkMultiplier = {
            1: 1,
            2: 0.87
        };

        var relativeMaxReps = {
            1: 1,
            2: 0.95,
            3: 0.93,
            4: 0.90,
            5: 0.87,
            6: 0.85,
            7: 0.83,
            8: 0.80,
            9: 0.77,
            10: 0.75
        };

        var performanceLevels = [
            [0, 'начинаещ ниво 1']
            [0.47, 'начинаещ ниво 2'],
            [0.72, 'начинаещ ниво 3'],
            [0.97, 'трениран ниво 1'],
            [1.22, 'трениран ниво 2'],
            [1.47, 'опитен'],
            [1.72, 'експерт']
        ];

        var presets = [{
            name: 'Ð”Ð¸Ð´Ð¾',
            gender: GENDER_MALE,
            weight: 86.5,
            height: 173,
            deadlift: 140,
            reps: 5
        }, {
            name: 'ÐœÐ°Ñ€Ð¸Ñ',
            gender: GENDER_FEMALE,
            weight: 56,
            height: 164,
            deadlift: 120,
            reps: 6
        }, {
            name: 'Ð¢ÐµÐ¶ÑŠÐº ÐŸÐ¸Ñ‡',
            gender: GENDER_MALE,
            weight: 106,
            height: 178,
            deadlift: 250,
            reps: 7
        }, {
            name: 'Ð¢ÐµÐ¶ÑŠÐº ÐŸÐ¸Ñ‡ #2',
            gender: GENDER_MALE,
            weight: 106,
            height: 178,
            deadlift: 255,
            reps: 7
        }];


        var calc = {
            init: function init() {
                this._prefillData();
                this._presets();

                $('select:not(.res)').on('change', this.doCalc.bind(calc));
            },

            doCalc: function doCalc() {
                this.showResults(this.calcResults(this._gatherData()));
            },

            nextLevels: function nextLevels(ratio) {
                var ret = [];
                var n = 0;

                for (; n < performanceLevels.length; ++n) {
                    if (ratio < performanceLevels[n][0]) {
                        ret.push(performanceLevels[n]);
                    }
                }
                return ret;
            },

            performanceFromRatio: function performanceFromRatio(ratio) {
                var ret;
                var n = 0;

                for (; n < performanceLevels.length; ++n) {
                    if (ratio >= performanceLevels[n][0]) {
                        ret = performanceLevels[n][1];
                    }
                }
                return ret;
            },

            calcResults: function calcResults(data) {
                var relativeMax;
                var work;
                var wpbRatio;
                var performance;

                if (data.deadlift && data.reps) {
                    relativeMax = data.deadlift / relativeMaxReps[data.reps];
                }

                if (data.height && relativeMax) {
                    work = this.work(data.height, relativeMax);
                }

                if (work && data.weight && data.gender) {
                    wpbRatio = this.workPerBodyRatio(work, data.weight, data.gender);
                }

                if (wpbRatio) {
                    performance = this.performanceFromRatio(wpbRatio);
                }

                return {
                    data: data,
                    relativeMax: relativeMax,
                    work: work,
                    wpbRatio: wpbRatio,
                    performance: performance
                };
            },

            showResults: function showResults(results) {
                var data = results.data;
                var nextLevels = [];
                var self = this;

                if (results.relativeMax) {
                    this.val('rm', this.toLiftingWeight(results.relativeMax), 'Real: ' + results.relativeMax);
                }

                if (results.wpbRatio) {
                    this.val(
                        'wbw',
                        results.wpbRatio.toFixed(2),
                        'Work: ' + results.work + ', WBR: ' + results.wpbRatio);
                }

                if (results.performance) {
                    this.val('performance', ', ' + results.performance + '');
                }

                if (results.performance) {
                    nextLevels = this.nextLevels(results.wpbRatio);

                    if (nextLevels.length) {
                        $('.main').addClass('has-results');
                        $('select[name=nextLevel]')
                            .empty()
                            .append(nextLevels.map(function mapLevels(item) {
                                return '<option value="' + item[0] + '">' + item[1] + '</option>';
                            }))
                            .on('change', function changeNextLevel() {
                                var targetRatio = this.value;
                                var targetRank = $(this).children(':selected').text();
                                var nextRm = self.liftForWork(
                                    self.workForRatio(targetRatio, data.weight, data.gender),
                                    data.height
                                );
                                var nextReps = [];
                                var n;

                                function buildLevelReps(i) {
                                    nextReps.push(
                                        $('<div></div>')
                                            .append(i + ': ')
                                            .append(
                                                $('<span></span>')
                                                    .text(self.toLiftingWeight(nextRm * relativeMaxReps[i], true))
                                                    .on('click', function clickNextLevelWeight() {
                                                        $('select[name=deadlift]').val(
                                                            self.toLiftingWeight(nextRm * relativeMaxReps[i], true)
                                                        );
                                                        $('select[name=reps]').val(i);
                                                        self.doCalc();
                                                    })
                                            )
                                            .prop('title', 'Real Lift: ' + (nextRm * relativeMaxReps[i]).toFixed(2))
                                    );
                                }

                                for (n in relativeMaxReps) {
                                    if (!relativeMaxReps.hasOwnProperty(n)) {
                                        continue;
                                    }

                                    buildLevelReps(n);
                                }

                                self.val('nextLevel', targetRank, 'Next RM: ' + nextRm);
                                self.set('nextLevelReps', nextReps);
                            })
                            .trigger('change');
                    } else {
                        this.set('nextLevelReps', 'Max Level Achieved');
                        $('.main').removeClass('has-results');
                    }
                }
            },

            val: function val(key, value, title) {
                $('.' + key).text(value).prop('title', title);
            },

            set: function set(key, obj) {
                $('.' + key).empty().append(obj);
            },

            /**
             * work
             * @param  {int} height   athlete height (cm)
             * @param  {int} lift     lift in kg
             * @return {num}          work
             */
            work: function work(height, lift) {
                return (height / 100) * (1 / 3) * lift;
            },

            workPerBodyRatio: function workPerBodyRatio(work, weight, gender) {
                return Math.floor((work / weight / genderWorkMultiplier[gender]) * 100) / 100;
            },

            workForRatio: function workForRatio(ratio, weight, gender) {
                return ratio * weight * genderWorkMultiplier[gender];
            },

            liftForWork: function liftForWork(work, height) {
                return work / (height * (1 / 3) / 100);
            },

            /**
               * turns calculated weight (something derived from a function) to
               * lifting weigh (something you can put on the bar)
               * @param  {int} weight    raw weight
               * @param  {bool} upwards  round upwards or downwards
               * @return {float}         weigt that can be put to a bar (divisible by 2.5)
               */
            toLiftingWeight: function toLiftingWeight(weight, upwards) {
                var precision = 2.5;
                var func = 'round'; // Ñ‚Ð²Ð° Ð·Ð°ÐºÑ€ÑŠÐ³Ð»Ñ Ð½Ð°Ð´Ð¾Ð»Ñƒ
                var ret;

                if (upwards) {
                    func = 'ceil'; // Ñ‚Ð²Ð° Ð·Ð°ÐºÑ€ÑŠÐ³Ð»Ñ Ð½Ð°Ð³Ð¾Ñ€Ðµ
                }

                ret = Math[func](weight / precision) * precision;

                return ret;
            },

            _gatherData: function _gatherData() {
                var ret = {};

                $('select').each(function mapData(i, select) {
                    ret[select.name] = parseFloat(select.value);
                });

                return ret;
            },

            _prefillData: function _prefillData() {
                $('select[name=gender]').append(genders.map(function mapGender(gender) {
                    return '<option value="' + gender[0] + '">' + gender[1] + '</option>';
                }));

                $.each(prefills, function mapPrefills(i, prefill) {
                    var select;
                    var n;

                    select = $('select[name=' + prefill[0] + ']');

                    if (prefill[4]) {
                        select.append('<option value="0"></option>');
                    }

                    for (n = prefill[1]; n <= prefill[2]; n += prefill[3]) {
                        select.append('<option value="' + n + '">' + n + '</option');
                    }
                });
            },

            _randomHuman: function _randomHuman() {
                return {
                    name: '',
                    gender: 1 + parseInt(Math.random() * 2, 10),
                    weight: 40 + parseInt(Math.random() * 80, 10),
                    height: 140 + parseInt(Math.random() * 65, 10),
                    deadlift: calc.toLiftingWeight(50 + parseInt(Math.random() * 150, 10)),
                    reps: 1 + parseInt(Math.random() * 9, 10)
                };
            },

            _randomPresets: function _randomPresets() {
                var n;

                for (n = 1; n <= 10; ++n) {
                    presets.push($.extend(this._randomHuman(), { name: 'Random #' + n }));
                }
            },

            _presets: function _presets() {
                this._randomPresets();

                $('div.presets table tbody').append(presets.map(function mapPresets(preset) {
                    return $('<tr></tr>')
                        .append(
                            $('<td></td>')
                                .append(
                                    $('<button>').on('click', function applyPreset() {
                                        var n;

                                        for (n in preset) {
                                            if (preset.hasOwnProperty(n)) {
                                                $('select[name=' + n + ']').val(preset[n]);
                                            }
                                        }

                                        calc.doCalc();
                                    }).text('Apply')
                                )
                        )
                        .append($('<td></td>').text(preset.name))
                        .append($('<td></td>').text(preset.height))
                        .append($('<td></td>').text(preset.weight))
                        .append($('<td></td>').text(preset.deadlift))
                        .append($('<td></td>').text(preset.reps));
                }));
            },

            liftingRepsFromRelativeMax: function liftingRepsFromRelativeMax(relativeMax) {
                var ret = {};
                var n;

                for (n in relativeMaxReps) {
                    if (relativeMaxReps.hasOwnProperty(n)) {
                        ret[n] = this.toLiftingWeight(relativeMaxReps[n] * relativeMax, true);
                    }
                }

                return ret;
            },

            runTest: function runTest() {
                var random = this._randomHuman();
                var results = this.calcResults(random);
                var nextLevels = this.nextLevels(results.wpbRatio);
                var n = 0;
                var nextRm;
                var liftingReps;
                var k;

                // console.log(results);
                // console.log(nextLevels);

                if (nextLevels.length) {
                    for (; n < nextLevels.length; ++n) {
                        // console.log('next level', nextLevels[n]);
                        nextRm = this.liftForWork(
                            this.workForRatio(nextLevels[n][0], random.weight, random.gender),
                            random.height
                        );

                        liftingReps = this.liftingRepsFromRelativeMax(nextRm);
                        for (k in liftingReps) {
                            if (liftingReps.hasOwnProperty(k)) {
                                assert(
                                    this.calcResults($.extend({}, random, {
                                        reps: k,
                                        deadlift: liftingReps[k]
                                    })).performance,
                                    nextLevels[n][1],
                                    nextLevels[n][1] + ' matches calculation for suggested reps ' +
                                    k + ' and deadlift ' + liftingReps[k]
                                );
                            }
                        }
                    }
                }
            },

            runTests: function runTests(many) {
                var n;

                for (n = 0; n < (many || 1); ++n) {
                    this.runTest();
                }
            }
        };

        /* eslint no-console: 0 */
        /* eslint no-use-before-define: 0 */
        function assert(val1, val2, text) {
            if (val1 !== val2) {
                throw new Error(val1 + ' and ' + val2 + ' are different.');
            }

            console.log(text);
        }

        $(document).on('ready', calc.init.bind(calc));
    }

    return {
        deadliftIndex
    }
})();