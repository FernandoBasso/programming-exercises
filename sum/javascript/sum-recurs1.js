var l = console.log.bind(console);

//
// This version validates input. If input is incorrect, just returns 0.
//

/**
 * Sums the numbers in an array.
 *
 * @param {array} nums - an array of numbers.
 * @param {integer} index - the index of the current element in the array.
 * @return {number} - the total sum of the elements of the array.
 */
function sum(nums, index) {

    if (nums.constructor !== Array) return 0;

    index = index !== undefined ? index : nums.length - 1;

    if (nums.length < 1) return 0;

    return index !== 0 ? nums[index] + sum(nums, index - 1) : nums[0];
}

l(sum('nope'));
// →  0

l(sum([]));
// →  0

l(sum([2, 5, 10]));
// →  17

l(sum([-3, -6]));
// →  -9



//
// This algorithm is set up in a way that the first time you call it, you just
// pass the array of numbers, not having to worry about the index of the element
// to start adding. Then, on subsequent recursive calls, the index is passed.
// The result is that the array is summed from the last to the first element.
//
