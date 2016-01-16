var l = console.log.bind(console);

var iterator = function iterator (arr) {

    var index, len;

    if (arr.constructor !== Array)
        throw new TypeError('An array is required.');


    index = 0;
    len = arr.length;

    return function () {
        return (index < arr.length) ? arr[index++] : false;
    };
};

var it1 = iterator(['a', 'b', 'c']);
l(it1());    // →  a
l(it1());    // →  b
l(it1());    // →  c
l(it1());    // →  false

var it2 = iterator('foo');
// →  TypeError: An array is required.
