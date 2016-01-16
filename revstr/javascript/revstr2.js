var l = function log() {
    console.log.apply(console, arguments);
};


function revstr(str) {

    return str.split('').reverse().join('');
}

l(revstr('hello'));
