#include <stdio.h>

//
// Compile and run:
//
//   gcc -std=c99 -W -Wall -pedantic factorial.c -o factorial
//   ./factorial
//

int factorial(int);

int main(void) {

    printf("%d\n", factorial(5));
    printf("%d\n", factorial(8));
    // →  120
    // →  40320


    return 0;
}

int factorial(int num) {

    if (num == 1)
        return num;

    return num * factorial(num - 1);
}
