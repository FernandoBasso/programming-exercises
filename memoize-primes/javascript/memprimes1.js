var l = console.log.bind(console);

function isPrime(num) {

    // On the first run, create the local cache.
    if (isPrime.cache === undefined) isPrime.cache = {}; // <1>

    // If it is in the cache, return the answer and we are done.
    if (isPrime.cache[num] !== undefined) return isPrime.cache[num];

    //
    // Answer not in the cache yet. Let's compute it.
    //

    // Let's assume it is prime.
    var flag = true;

    for (var k = 0; k < Math.sqrt(num); ++k) {
        if (num % 2 === 0) {
            flag = false; // We just found out it is not prime...
            break;
        }
    }

    // Add it to the cache, and return it.
    return isPrime.cache[num] = flag; // <2>
};


l(isPrime(9));
l(isPrime(17));
l(isPrime(4));
// →  true
// →  true
// →  false


//
// <1> `isPrime.cache` is an object like:
//
//      {
//          '9': true,
//          '17': true,
//          '4': false
//      }
//
// That is, the key is the number, and the value is either true or false,
// depending on whether that number is prime or not.
//
// <2> Assignment operations return the assigned thing.
//

