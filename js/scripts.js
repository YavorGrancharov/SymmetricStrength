/**
 * 1. Search Popup
 * 2. Index Tiled
 * 3. Menu Mobile
 * 4. Project Detail
 * 5. Preload
 */

'use strict';

(function ($) {

    $.fn.magnificPopup = function (opts) {

        let $self = $(this),
            options = $.extend({
                delegate: '.media',
                type: 'image',
                tLoading: '<div class="dots">\
							<div class="dot active"></div>\
							<div class="dot active"></div>\
							<div class="dot active"></div>\
							<div class="dot active"></div>\
						</div>',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 3] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                },
                closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
                callbacks: {
                    markupParse: function (item) {
                    },
                    imageLoadComplete: function () {
                        let $container = $('.mfp-container');

                        $container.addClass('load-done');
                        setTimeout(function () {
                            $container.addClass('load-transition');
                        }, 50);
                    },
                    change: function () {
                        let $container = $('.mfp-container');
                        $container.removeClass('load-done load-transition');
                    }

                }
            }, $self.data(), opts);
        $('.media', $self).each(function () {
            let href = $(this).data('url');

            if (href && href !== '') {
                $(this).attr('href', href);
            }

        });
        $self.magnificPopup(options);
    };

    $(document).on('ready', function () {

        let $header = $('.header'),
            $search = $('.fa-search', $header),
            $subscribe = $('.fa-newspaper-o', $header);

        // 1. Search Popup
        $search.on('click', function (e) {
            e.preventDefault();
            $('.box-search').slideToggle(400);
        });

        //2. Subscribe Popup
        $subscribe.on('click', function (e) {
            e.preventDefault();
            $('.box-subscribe').slideToggle(400);
        });


        // 2. Index Grid
        let $gridLayout = $('.grid-layout');
        $gridLayout.imagesLoaded(function () {
            $gridLayout.masonry({
                itemSelector: '.post',
            });
        });

        // 3. Menu Mobile
        let $btnMenu = $('.menu-mobile'),
            $hideMenu = $('.hide-menu');

        $btnMenu.on('click', function () {
            $header.toggleClass('active');

            if ($header.hasClass('active')) {
                $hideMenu.addClass('active');
            }
            else {
                $hideMenu.removeClass('active');
            }
        });
        $hideMenu.on('click', function () {
            $header.removeClass('active');
            $hideMenu.removeClass('active');
        });

        $('.menu-item-has-children', '.main-menu').on('click', ' > a', function (e) {
            let ww = $(window).width();

            if (ww <= 991) {
                let $parent = $(e.target).closest('.menu-item-has-children');
                e.preventDefault();
                $('>.sub-menu', $parent).slideToggle(400);
            }
        });

        // 5. Preload

        let $preload = $('#preload');

        if ($preload.length) {
            $(window).on('load', function () {
                $preload.fadeOut(400);
            });
        }
    });

})(jQuery);