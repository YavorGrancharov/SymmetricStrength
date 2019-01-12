

// ---------- script properties ----------

let include_num = 1;
let bold = 0;

// ---------- sites ----------


let s = new Array();

s[0] = "JSE^form.html^Enter JSE in the example above ...^open source, free, client side";
s[1] = "JSE DOCUMENTATION^doc.txt^JSE is a client-side local site search engine. Written entirely in JavaScript 1.3 it works with browsers from Netscape 4.7 to Microsoft Internet Explorer 6.0 ...^ faq, docs, instructions";


// ---------- end of script properties and sites ----------


let cookies = document.cookie;
let p = cookies.indexOf("d=");

if (p != -1) {
    let st = p + 2;
    let en = cookies.indexOf(";", st);
    if (en == -1) {
        en = cookies.length;
    }
    let d = cookies.substring(st, en);
    d = unescape(d);
}
let od = d;
let m = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
    m = 1;
}

let r = new Array();
let co = 0;

if (m == 0) {
    let woin = new Array();
    let w = d.split(" ");
    for (let a = 0; a < w.length; a++) {
        woin[a] = 0;
        if (w[a].charAt(0) == '-') {
            woin[a] = 1;
        }
    }
    for (let a = 0; a < w.length; a++) {
        w[a] = w[a].replace(/^\-|^\+/gi, "");
    }
    a = 0;
    for (let c = 0; c < s.length; c++) {
        pa = 0;
        nh = 0;
        for (let i = 0; i < woin.length; i++) {
            if (woin[i] == 0) {
                nh++;
                let pat = new RegExp(w[i], "i");
                let rn = s[c].search(pat);
                if (rn >= 0) {
                    pa++;
                } else {
                    pa = 0;
                }
            }
            if (woin[i] == 1) {
                let pat = new RegExp(w[i], "i");
                let rn = s[c].search(pat);
                if (rn >= 0) {
                    pa = 0;
                }
            }
        }
        if (pa == nh) {
            r[a] = s[c];
            a++;
        }
    }
    co = a;
}

if (m == 1) {
    d = d.replace(/"/gi, "");
    let a = 0;
    let pat = new RegExp(d, "i");
    for (let c = 0; c < s.length; c++) {
        let rn = s[c].search(pat);
        if (rn >= 0) {
            r[a] = s[c];
            a++;
        }
    }
    co = a;

}


function return_query() {
    document.jse_Form.d.value = od;
}

function num_jse() {
    document.write(co);
}

function out_jse() {
    if (co == 0) {
        document.write('Your search did not match any documents.<p>Make sure all keywords are spelt correctly.<br>Try different or more general keywords.');
        return;
    }
    for (let a = 0; a < r.length; a++) {
        let os = r[a].split("^");
        if (bold == 1 && m == 1) {
            let br = "<b>" + d + "</b>";
            os[2] = os[2].replace(pat, br);
        }
        if (include_num == 1) {
            document.write(a + 1, '. <a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
        } else {
            document.write('<a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
        }
    }

}
