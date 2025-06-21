/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
- s = '12:01:00PM'
Return '12:01:00'.
- s = '12:01:00AM'
Return '00:01:00'.

Function Description:
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
string s: a time in 12 hour format

Returns:
string: the time in 24 hour format

Input Format:
A single string s that represents a time in -12hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints:
All input times are valid

Sample Input:
07:05:45PM

Sample Output:
19:05:45
*/
function timeConversion(s) {
    /**
     * The expression s.slice(0, -2) extracts all characters from the start of s up to (but not including) the last two characters, assigning this substring to time. 
     * The expression s.slice(-2) takes the last two characters of s and assigns them to period.
     */
    const [time, period] = [s.slice(0, -2), s.slice(-2)];

    /**
     * The split(':') method divides the string at each colon, resulting in an array of strings like ["07", "05", "45"]. 
     * The map(Number) part then converts each of these string elements into a number, producing [7, 5, 45].
     */
    let [hours, minutes, seconds] = time.split(':').map(Number);

    if (period.toUpperCase() === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period.toUpperCase() === 'AM' && hours === 12) {
        hours = 0;
    }

    // The padStart(2, '0') method ensures that each value is at least two characters long, adding a leading zero if necessary.
    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
}

/** 
 * Expected Output:
 * 19:05:45
*/
timeConversion("07:05:45PM");
