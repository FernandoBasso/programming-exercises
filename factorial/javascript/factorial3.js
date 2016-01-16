var l = function log() {
    console.log.apply(console, arguments);
};

//
// Factorial version 3. Recursive calls.
//

function factorialize(num) {

    if (num === 1) return num;

    return num * factorialize(num - 1);
}

l(factorialize(5));     // →  120
l(factorialize(8));     // →  40320
