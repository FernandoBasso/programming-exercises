var l = function log() {
    console.log.apply(console, arguments);
};

//
// Version 2. Using a for loop.
//

function factorialize(num) {

    var total = 1;
    var i;

    if (num === 1) return num;

    for (i = num; i > 1; --i)
        total *= i;

    return total;
}

l(factorialize(5)); // →  120.
l(factorialize(8)); // →  40320.

