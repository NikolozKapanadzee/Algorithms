// 1. Sum of an Array

// Task: Given an array of numbers, return the sum of all elements.
// Example: [1, 2, 3] → 6

// function findSumOfArray(array) {
//   let ans = 0;
//   for (let i = 0; i < array.length; i++) {
//     ans = ans + array[i];
//   }
//   console.log(ans);
// }
// findSumOfArray([1, 2, 3, 4, 5, 6]);

// 2. Count Occurrences

// Task: Given a string and a character, return how many times that character appears.
// Example: "hello", 'l' → 2

//ვქმნით ორ ციკლს,ერთი გადაუვლის ჩვენს სტრინგს,მეორეც გადაუვლის მაგრამ იწყებს ერთით წინ,ადარებს წინა ასოს თუ ედრება მომდევნო ასო,თუ ედრება არეთარნებს და თუ არაფერი ედრება ნალს აბრუნებს

// function calculateChars(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return str[i];
//       }
//     }
//   }
//   return null;
// }
// console.log(calculateChars("aaaaa"));

// 3. Reverse a String

// Task: Reverse a string without using .reverse().
// Example: "abc" → "cba"

//ფორ ლუპში საწყისი წერტილი არის სტრინგის ბოლო სიმბოლო რომელიც სათითაოდ მოდის უკან და უკან,ჩვენ კიდევ ამ ყველასფერს ვაკონსოლებთ

// function reverseString(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// }
// reverseString("abc");

// 4. Find Max in Array

// Task: Return the largest number in an array.
// Example: [4, 1, 9] → 9

//მასივს ვსორტავთ პირველ რიგში რათა ზრდადობის მიხედვით დავაყენოთ მასივის წევრები და შემდეგ ვარეთარნებთ ბოლო ელემენტს რადგან ის აუცულებლად ყველაზზე დიდი იქნება

// function findMaxNumberInTheArray(array) {
//   const sortedArray = array.sort((a, b) => a - b);
//   const maxNumber = sortedArray[sortedArray.length - 1];
//   return maxNumber;
// }
// console.log(findMaxNumberInTheArray([4, 1, 9]));

// 5. Check Palindrome

// Task: Return true/false if a string reads the same forward/backward.
// Example: "level" → true

//პირველ რიგში ვატრიალებთ სტრინგს უკუღმა როგორც მესამე დავალებაში გავაკეთეთ,შემდეგ მიღებულ შემოტრიალებულ სტრინგს ვადარებთ თავდაპირბელ ვარიანტს,თუ დაემთხვა ვარეთარნებთ თრუს თუ არადა ფოლსს

// function isPalindrome(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome("asd"));

// 6. FizzBuzz

// Task: For numbers 1–n:

// print "Fizz" if divisible by 3

// "Buzz" if divisible by 5

// "FizzBuzz" if both

// otherwise print the number

// function devidableNumbers(n) {
//   if (n % 3 === 0 && n % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (n % 3 === 0) {
//     console.log("Fizz");
//   } else if (n % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(n);
//   }
// }
// devidableNumbers(23);

// 7. Remove Duplicates from Array

// Task: Given an array, remove duplicates and return a new array.
// Example: [1, 1, 2, 3] → [1, 2, 3]

// function removeDuplicatesFromArray(array) {
//   return array.filter((item, index) => array.indexOf(item) === index);
// }
// console.log(removeDuplicatesFromArray([1, 2, 2, 3, 4]));

// 8. Find the First Non-Repeating Character

// Task: Given a string, return the first character that appears only once.
// Example: "aabbcde" → "c"

// function firstNonRepeatingCharacter(str) {
//   let chars = str.split("");
//   let nonRepeat = chars.filter(
//     (char) => str.indexOf(char) === str.lastIndexOf(char)
//   );
//   return nonRepeat[0];
// }
// console.log(firstNonRepeatingCharacter("aabbucde"));

// 9. Factorial (Recursive or Loop)

// Task: Write a function that returns n! (factorial).
// Example: 5! = 120

// function calculateFactorial(n) {
//   let res = 1;
//   for (let i = 1; i <= 5; i++) {
//     res *= i;
//   }
//   return res;
// }
// console.log(calculateFactorial(5));

// 10. Merge Two Sorted Arrays

// Task: You are given two sorted arrays. Return a single sorted array without using .sort().
// Example: [1,3,5] + [2,4,6] → [1,2,3,4,5,6]

//აქ გავიჭედე ამას უნდა მოვუბრუნდე                                                                   ?????????????????????????????????????????????????????????????

// function mergeTwoArrays(arr1, arr2) {
//   let finalArr = [...arr1, ...arr2];
//   return finalArr;
// }
// console.log(mergeTwoArrays([1, 3, 5], [2, 4, 6]));

// 11. Two Sum

// Task: Given an array and a target number, return the indices of the two numbers that add up to the target.
// Example: [2,7,11,15], target = 9 → [0,1]
//ვატრიალებთ ჩვეულებრივად ფორ ლუპს და შიგნით ვქმნით მეორე ლუპს რომელის საწყისი წერტილი იქნება წინა ლუპის პირველი ელემენტის მომდევნო,ვუმატებთ ერტმანეთს და ვადარებთ თუ უდრის თარგეთს,თუ უდრის გამოგვაქვს ინდექსები,თუ არადა ვაბრუნებთ ნალს

// function findIndexOfTargetNumber(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let k = i + 1; k < array.length; k++) {
//       if (array[i] + array[k] === target) {
//         return [i, k];
//       }
//     }
//   }
//   return null;
// }
// console.log(findIndexOfTargetNumber([2, 8, 7, 1], 9));

// 12. Check Anagrams

// Task: Given two strings, return true if they are anagrams (same letters, different order).
// Example: "listen", "silent" → true

//ორივე სტრინგი გადავიყვანოთ მასივად,დავსორტოთ ანბანის მიხედვით და შემდეგ შევაწებოთ ერთმანეთს,თუ ეს ორივე სტრინგი ერთმანეთს დაემთხვა თრუა,თუ არა ფოლსი

// function checkAnagrams(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const sortedStr1 = str1.split("").sort().join("");
//   const sortedStr2 = str2.split("").sort().join("");
//   if (sortedStr1 === sortedStr2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAnagrams("listen", "silent"));

// 13. Find Missing Number

// Task: An array contains numbers from 1 to n except one. Find which number is missing.
// Example: [1,2,4,5] → 3

//ვიპოვე ჯერ მასივის რიცხვების ახლანდელი ჯამი,შემდეგ ვიპოვე ამდენი უნდა ყოფილიყო დაკლებული რიცხვის გარეშე და სხვაობა დავარეთარნე

// function findMissingNumber(array) {
//   let expectedSum = 0;
//   let currentSum = 0;
//   let sortedArray = array.sort((a, b) => a - b);
//   for (let i = 0; i < sortedArray.length; i++) {
//     currentSum += sortedArray[i];
//   }
//   for (let k = 0; k <= sortedArray.length + 1; k++) {
//     expectedSum += k;
//   }

//   return expectedSum - currentSum;
// }
// console.log(findMissingNumber([1, 2, 3, 5, 6]));

// 14. Count Vowels

// Task: Given a string, return how many vowels are inside (a e i o u).
// Example: "hello" → 2

// function countVowels(str) {
//   let cnt = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       cnt += 1;
//     }
//   }
//   return cnt;
// }
// console.log(countVowels("hello"));

// 15. Find Intersection of Two Arrays

// Task: Given two arrays, return the common elements.
// Example: [1,2,3] & [2,3,4] → [2,3]

function commonElements(arr1, arr2) {
  let finalArr = [...arr1, ...arr2];
  let commonElements = finalArr.filter(
    (el) => finalArr.indexOf(el) !== finalArr.lastIndexOf(el)
  );
  let finalCommonElements = commonElements.filter(
    (el, index) => commonElements.indexOf(el) === index
  );
  console.log(finalCommonElements);
}
commonElements([1, 2, 3], [2, 3, 4]);
