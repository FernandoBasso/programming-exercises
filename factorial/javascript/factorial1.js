var l = function log() {
    console.log.apply(console, arguments);
};

//
// Version 1. Using a while loop.
//

function factorialize(num) {

    if (num === 1) return num;

    var total = 1;

    while (num > 1) {
        total *= num--;
    }

    return total;
}

l(factorialize(5)); // →  120.
l(factorialize(8)); // →  40320.
