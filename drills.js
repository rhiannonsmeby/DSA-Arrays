//5. URLify a string
//write a method that takes in a string and replaces all its empty spaces
//with a %20. Your algo can only make 1 pass through the string
//Input: tauhida parveen
//Output: tauhida%20parveen
function urlify(str) {
    //if there are no spaces, return the string
    if (!str.includes(' ')) {
        return str;
    }
    //turn the string into an array
    let strArray = str.split('');
    //loop over the array
    for (let i = 0; i < strArray.length; i++) {
        //if the character at index i is a space, replace it with %20
        if (strArray[i] === ' ') {
            strArray[i] = '%20';
        }
    }
    //turn the array back into a string 
    strArray = strArray.join('');
    
    //at the end of the string, return the string
    return strArray;
}
console.log(urlify('tauhida parveen'))

//6. Filtering an array
//write an alkgorithm to remove all numbers less than 5 from the array
//don't use .filter()
function greaterThanFive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}
console.log(greaterThanFive([1,2,3,4,5,6,7,8,9,10]))

//7. Max sum in the array
//write an algorithm that will find the largest sum in a continuous sequence
//Input: [4, 6, -3, 5, -2, 1]
//Output: 12
function maxSum(arr) {
    let currentMax = 0;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        max += arr[i];

        if(currentMax < max) {
            currentMax = max
        }
        if (max < 0) {
            max = 0
        }
    }
    return currentMax
}
console.log(maxSum([4, 6, -3, 5, -2, 1]))

//8. Merge arrays
//you have 2 already sorted arrays. merge the 2 arrays into a single array which 
//should also be sorted
//Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
function merge(arr1, arr2) {
    let mergedArr = arr1.concat(arr2);

    return mergedArr.sort((arr1, arr2) => {
        return arr1 - arr2;
    });
}
console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

//9. Remove characters
//algo that deletes given chars from a string e.g. 
//given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the 
//characters to be removed are "aeiou", the algorithm should transform the original 
//string to "Bttl f th Vwls: Hw vs. Grzny"
//dont use filter, split, or join

//10. Products
//algo that outputs an array where each index is the product of all the numbers
//in the input array except for the number at each current index
//Input:[1, 3, 9, 4]
//Output:[108, 36, 12, 27]

//11. 2D Array 
//algo that searches through a 2D array and whenever it finds a 0 it should set
//the entire row and column to zero
//Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

//12. String rotation
//given 2 strings, str1 and str2, write a program that checks if str2 is a
//rotation of str1
// Input: amazon, azonma
// Output: False
// Input: amazon, azonam
// Output: true