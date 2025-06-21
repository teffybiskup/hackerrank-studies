/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.

  Example:
  a = [1,2,3,4,3,2,1]
  The unique element is 4.

  Function Description:
  Complete the lonelyinteger function in the editor below.
  lonelyinteger has the following parameter(s):
  int a[n]: an array of integers

  Returns:
  int: the element that occurs only once

  Input Format:
  The first line contains a single integer, n, the number of integers in the array.
  The second line contains n space-separated integers that describe the values in .

  Constraints:
  1 <= n < 100
  It is guaranteed that n is an odd number and that there is one unique element.
  0 <= a[i] <= 100, where 0 <= i < n.
*/
function lonelyinteger(a) {
    let result = 0;
    /**
     * This line uses the bitwise XOR assignment operator (^=) to update the value of result by XOR-ing it with num. 
     * In other words, it sets result to the result of result ^ num. 
     * The XOR operation compares each bit of the two numbers: 
     *   if the bits are different, the result is 1; 
     *   if they are the same, the result is 0. 
     * XOR-ing a number with itself cancels it out (produces 0), and XOR-ing with 0 leaves the number unchanged.
     * As a result, after XOR-ing all numbers in such an array, result will hold the value of the unique number.
     */
    for (let num of a) {
        result ^= num;
    }
    console.log(result);
}

/** 
 * Expected Output:
 * 4
*/
lonelyinteger([1,2,3,4,3,2,1]);

/** 
 * Expected Output:
 * 1
*/
lonelyinteger([1]);

/** 
 * Expected Output:
 * 2
*/
lonelyinteger([1,1,2]);

/** 
 * Expected Output:
 * 2
*/
lonelyinteger([0,0,1,2,1]);
