/**
 * Sum an array of shorts, recursively.
 *
 *      gcc -std=c99 -W -Wall -pedantic sum-recurs1.c -o sum-recurs1
 *      ./sum-recurs1
 */


#include <stdio.h>


short sum(short *, short);


int main(void) {

    short arr1[] = {10, -2, 3, 1};
    short arr2[] = {5, 4, -100};

    printf("%hd\n", sum(arr1, sizeof arr1 / sizeof *arr1 - 1));
    // →  12

    printf("%hd\n", sum(arr2, sizeof arr2 / sizeof *arr2 - 1));
    // →  -91

    return 0;
}

short sum(short *nums, short index) {
    return index != 0 ? *(nums + index) + sum(nums, index - 1) : nums[0];
}

