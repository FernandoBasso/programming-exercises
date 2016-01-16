var l = console.log.bind(console);

function revstr(str) {

    var tmp = str.split('');
    var strarr = [];

    var i, len, j;

    for ( i = 0, len = tmp.length, j = len; i < len; ++i, --j) {
        strarr[j] = tmp[i];
    }

    return strarr.join('');
}

l(revstr('hello'));
