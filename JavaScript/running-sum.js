/**
 *  Consider an array of integers and a non-zero positive starting value x. A running sum is calculated by adding each element of the array to x consecutively. Determine the minimum positive value of x such that the running sum is at least 1 after every iteration.
 *  Examples:
 *  arr = [-4, 3, 2, 1]
 * 
 *  Let starting value x = 5
 *  Running sums:
 *  5 + (-4) = 1
 *  1 + 3 = 4
 *  4 + 2 = 6
 *  6 + 1 = 7
 * 
 *  There is no value smaller than 5 that satisfies the condition.
 * 
 *  arr = [3, -6, 5, -2, 1]
 * 
 *  If the starting value is 4, running sums are [7, 1, 6, 4, 5]. This is the minimum starting value.
 * 
 *  arr = [5]
 * 
 *  The starting value of x is 1.
 *  Min start has the following params:
 *    int arr[n]: an array of integers to sum
 *  Return:
 *    long: the minimum initial value
 * 
 *  Input format for custom testing:
 *    Locked stub code in the editor reads the following input from stdin and passes it to the function.
 *    The first line contains a integer, n, the number of elements in arr.
 *  
 *  Sample input:
 *    stdin / function
 *    5 - arr[] size n = 5
 *    -5 - arr = [-5, 3, -2, 3, 1]
 *    4
 *    -2
 *    3
 *    1
 *  
 *  Sample output:
 *    6
 *  
 *  Starting with a value of 6 gives the following sums: 
 *    6+-5 = 1 => 1+4 = 5 => 5+-2 = 3 => 3+3 = 6 => 6+1 = 7.
 *  Any initial value less than 6 will fail at the first element.
*/
function minStart(arr) {
  let minSum = 0;
  let runningSum = 0;

  for (let num of arr) {
    runningSum += num;
    minSum = Math.min(minSum, runningSum);
  }

  console.log(1 - minSum);
}

/** 
 * Expected Output:
 * 6
*/
minStart([-5, 4, -2, 3, 1]);
