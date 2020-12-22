/**
Objective

Today, we're practicing bitwise operations. Check the attached tutorial for more details.

Task

We define
to be a sequence of distinct sequential integers from to ; in other words, . We want to know the maximum bitwise AND value of any two integers, and (where ), in sequence that is also less than a given integer,

.

Complete the function in the editor so that given
and , it returns the maximum

.

Note: The

symbol represents the bitwise AND operator.

Input Format

The first line contains an integer,
, denoting the number of function calls.
Each of the subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of and

.

Constraints

Output Format

Return the maximum possible value of
for any in sequence

.

Sample Input 0

3
5 2
8 5
2 2

Sample Output 0

1
4
0

Explanation 0

We perform the following

function calls:

    When 

and , we have the following possible and values in set

:
The maximum of any that is also is , so we return

.
When
and , the maximum of any in set is (see table above), so we return
.
When
and , the maximum of any in set is (see table above), so we return

    .

Sample Input 1

2
9 2
8 3

Sample Output 1

1
2


**/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let bw = (a & b);
            (bw < k && bw > max) && (max = bw);
        }
    } 
    return max;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}