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

// function commonElements(arr1, arr2) {
//   let finalArr = [...arr1, ...arr2];
//   let commonElements = finalArr.filter(
//     (el) => finalArr.indexOf(el) !== finalArr.lastIndexOf(el)
//   );
//   let finalCommonElements = commonElements.filter(
//     (el, index) => commonElements.indexOf(el) === index
//   );
//   console.log(finalCommonElements);
// }
// commonElements([1, 2, 3], [2, 3, 4]);

// 16. Balanced Brackets

// Task: Given a string containing brackets ()[]{}, check if they are balanced.
// Example: "([{}])" → true
// ეს დასაწერია                                                                                         ?????????????????????????????????????????????????????????????

// 17. Remove All Spaces

// Task: Given a string, return a new one with all spaces removed.
// Example: "a b c" → "abc"

// function removeAllSpaces(str) {
//   let finalVersion = str.replaceAll(" ", "");
//   return finalVersion;
// }
// console.log(removeAllSpaces("a b c"));

// 18. Find Longest Word in a Sentence

// Task: Return the longest word.
// Example: "Backend developers rock" → "developers"

//დავსპლიტოთ სტრინგი და შევქმნათ მასივი,ეს მასივი დავსორტოთ სიგრძის მიხედვით(ყველაზე დიდიდან დაბლა) და ამოვიღოთ მასივის პირველი ელემენტი

// function findTheLongestWord(str) {
//   let splitedStringToWords = str.split(" ");
//   let longestWord = splitedStringToWords.sort((a, b) => b.length - a.length)[0];
//   console.log(longestWord);
// }
// findTheLongestWord("Backend Developers Rock");

// 19. Unique Characters

// Task: Given a string, return true if all characters are unique.
// Example: "abcde" → true, "aabc" → false
//სტრინგი დავსპლიტეთ და გავამასივეთ,შემდეგ გაფფილტრეთ და მივიღეთ ახალი მასივი რომელშიც იქნება მხოლოდ უნიკალური სიმბოლოები,თუ გაფილტრული მასივის და თავდაპირველი მასივის სიგრძე ტოლია ესეიგი ყველა უნიკალურია,თუ სხვადასხვა ზომაა ესეიგი გვქონდა არანუნიკალური სიმბოლოები და ისინი ამოვარდა მეორე მასივიდან

// function isUnique(str) {
//   let splitedStr = str.split("");

//   let unique = splitedStr.filter(
//     (el) => splitedStr.indexOf(el) === splitedStr.lastIndexOf(el)
//   );
//   if (unique.length === splitedStr.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isUnique("abcdee"));

// 20. Convert Array to Object of Counts

// Task: Given an array, return an object that shows how many times each value appears.
// Example:
// Input: ["a","b","a","c","b","a"]
// Output: { a: 3, b: 2, c: 1 }

//შევქმენით ცარიელი ობიექტი,შემდეგ გადავუარეთ მასივს,თუ ცარიელ ობიექტში ამ ქით ელემენტი არსებობდა დავუმატებდით ერთს,თუ არა შევქმნიდით და 1 დავუყენებდით ხელით მნიშვნელობას

// function convertArrayToObjectOfCounts(array) {
//   let result = {};
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (result[element]) {
//       result[element] = result[element] + 1;
//     } else {
//       result[element] = 1;
//     }
//   }
//   return result;
// }
// console.log(convertArrayToObjectOfCounts(["a", "b", "a", "c", "b", "a"]));

// 21. Convert Number to Binary

//                                                                              ?????????????????????????????????????????????????????????????????????????????????

// Task: Given a non-negative integer, return its binary representation as a string.
// Example: 5 → "101"

// 22. Count Words in a Sentence

// Task: Given a sentence, return how many words it contains.
// Example: "I love backend" → 3

// function countWordsInSentence(str) {
//   return str.split(" ").length;
// }
// console.log(countWordsInSentence("I love backend"));

// 23. Capitalize First Letter of Each Word

// Task: Input: "hello world"
// Output: "Hello World"

//ჯერ დავსპლიტეთ სტრინგი და გავამასივეთ,შემდეგ გადავუარეთ მასივს ფორ ლუპით და თითოეული ელემენტის პირველი ასო ბგერა დიდი ასო გავხადეთ და ამას დავუმატეთ სიტყვის დარჩენილი ნაწილი,საბოლოოდ კი ისევ სტრინგად გადავაქციეთ დარეთარნების დროს

// function capitalizeFirstLetter(str) {
//   let splitedStr = str.split(" ");
//   for (let i = 0; i < splitedStr.length; i++) {
//     splitedStr[i] = splitedStr[i][0].toUpperCase() + splitedStr[i].slice(1);
//   }
//   return splitedStr.join(" ");
// }
// console.log(capitalizeFirstLetter("hello world"));

// 24. Return Index of First Occurrence

// Task: Without using indexOf, find the first index of a given character in a string.
// Example: "hello", 'l' → 2

// function findIndexOfTarget(str, target) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findIndexOfTarget("hello", "h"));

// 25. Check if Array is Sorted

// Task: Given an array, return true if it's sorted ascending, otherwise false.
// Example: [1,2,3,4] → true

// function isSorted(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] > array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted([1, 2, 3, 4, 5]));

// 26. Sum of Digits

// Task: Input: 12345
// Output: 1+2+3+4+5 = 15

// function sumOfDigits(number) {
//   let stringedNumber = number.toString();
//   let sum = 0;
//   for (let i = 0; i < stringedNumber.length; i++) {
//     sum += Number(stringedNumber[i]);
//   }
//   return sum;
// }
// console.log(sumOfDigits(12345));

// 27. Remove Falsy Values

// Task: Remove all falsy values (false, 0, '', null, undefined, NaN) from an array.
// Example: [0,1,false,2,"",3] → [1,2,3]

// function removeFalsyValues(array) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       ans.push(array[i]);
//     }
//   }
//   return ans;
// }
// console.log(removeFalsyValues([0, 1, false, 2, "", 3]));

// 28. Return Middle Character(s)

// Task:

// If string length is odd → return 1 middle char

// If even → return 2 middle chars
// Example: "cat" → "a"
// Example: "test" → "es"

//დავსპლიტოთ ჩვენი სტრინგი,ვიპოვოთ შუარიცხვი,შემდეგ გავყოთ ორ ნაწილად,თუ კენტია გამოვაჩინოთ მეორე ნაწილის(უფრო გრძელი მეორე ნაწილი გვრჩება კენტი) პირველი ელემენტი,თუ ლუწია პირველი ნაწილის ბოლო ელემენტი და დავუმატოთ მეორე ნაწილის პირველი ელემენტი

// function middleCharacters(str) {
//   splittedStr = str.split("");
//   let mid = Math.floor(splittedStr.length / 2);
//   let firstHalf = splittedStr.slice(0, mid);
//   let secondHalf = splittedStr.slice(mid);
//   if (splittedStr.length % 2 === 1) {
//     return secondHalf[0];
//   } else {
//     return firstHalf[firstHalf.length - 1] + secondHalf[0];
//   }
// }
// console.log(middleCharacters("pavle"));

// 29. Find Second Largest Number

// Task: Return the second-largest number in an array without using .sort().
// Example: [10, 5, 20, 8] → 10

// function findSecondLargestNumber(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let k = i + 1; k < array.length; k++) {
//       if (array[i] > array[k]) {
//         let temp = array[i];
//         array[i] = array[k];
//         array[k] = temp;
//       }
//     }
//   }
//   return array[array.length - 2];
// }
// console.log(findSecondLargestNumber([10, 5, 20, 8]));

// 30. Remove Specific Element from Array

// Task: Given array and value, return new array with all occurrences removed.
// Example:
// Input: [1,2,3,2,4], 2
// Output: [1,3,4]

// function removeSpecificElementsFromArray(array, target) {
//   return array.filter((el) => el !== target);
// }
// console.log(removeSpecificElementsFromArray([1, 2, 3, 2, 4], 2));

// 31. Find the Shortest Word

// Task: Given a sentence, return the shortest word.
// Example: "NestJS is awesome" → "is"

// function findShortestWord(str) {
//   let splitedStr = str.split(" ");
//   let sortedStr = splitedStr.sort((a, b) => a.length - b.length);
//   return sortedStr[0];
// }
// console.log(findShortestWord("nestjs is awesome"));

// 32. Count Even Numbers in Array

// Task: Given an array of numbers, return how many are even.
// Example: [1,2,3,4,5,6] → 3

// function countEvenNums(array) {
//   let cnt = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) cnt += 1;
//   }
//   return cnt;
// }
// console.log(countEvenNums([1, 2, 3, 4, 5, 6, 8, 10]));

// 33. Convert Snake Case to Camel Case

// Task:
// Input: "hello_world_this_is_code"
// Output: "helloWorldThisIsCode"

// function convertSnakeCaseToCamelCase(str) {
//   let splitedStr = str.split("_");
//   for (let i = 1; i < splitedStr.length; i++) {
//     splitedStr[i] = splitedStr[i][0].toUpperCase() + splitedStr[i].slice(1);
//   }
//   return splitedStr.join("");
// }
// console.log(convertSnakeCaseToCamelCase("hello_world_this_is_code"));

// 34. Repeat a String n Times (no repeat())

// Task:
// Input: "abc", 3
// Output: "abcabcabc"

// function repeatStringNTimes(str, n) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += str;
//   }
//   return result;
// }
// console.log(repeatStringNTimes("abc", 3));

// 35. Find Last Index of Character (no lastIndexOf())

// Task:
// Input: "banana", 'a'
// Output: 5

// function lastIndexOfChar(str, char) {
//   for (let i = str.length - 1; i > 0; i--) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(lastIndexOfChar("banana", "a"));

// 36. Return Only Numbers from Array

// Task:
// Input: ["a", 1, "b", 2, {}, 3]
// Output: [1,2,3]

// function onlyNumbers(array) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       ans.push(array[i]);
//     }
//   }
//   return ans;
// }
// console.log(onlyNumbers(["a", 1, "b", 2, {}, 3]));

// 37. Check if Two Arrays Are Equal

// Task: Return true if arrays have the same values in same order.
// Example:
// [1,2,3] and [1,2,3] → true

// function checkIfTwoArraysAreEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkIfTwoArraysAreEqual([1, 2, 3], [1, 2, 3]));

// 38. Find First Element Greater Than n

// Task:
// Input: [1,5,10,20], n = 7
// Output: 10

// function greaterThanN(array, n) {
//   return array.filter((num) => num > n)[0];
// }
// console.log(greaterThanN([6, 50, 29, 8], 7));

// 39. Reverse Only Vowels

// Task:
// Input: "hello"
// Vowels reversed: "holle"

//                                      ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// function reverseOnlyVowels(str) {}
// reverseOnlyVowels("hello");

// 40. Count Unique Values

// Task:
// Input: [1,2,2,3,3,3]
// Output: 3 (unique values are 1, 2, 3)

// function countUniqueValues(array) {
//   let uniqueValues = array.filter((el, index) => array.indexOf(el) == index);
//   return [uniqueValues, uniqueValues.length];
// }
// console.log(countUniqueValues([1, 2, 2, 3, 3, 3]));

// 41. Find All Indices of a Value

// Task:
// Input: [1,2,2,3,2], 2
// Output: [1,2,4]

// function findAllIndicesOfValue(array, target) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       ans.push(i);
//     }
//   }
//   return ans;
// }
// console.log(findAllIndicesOfValue([1, 2, 6, 4, 5], 6));

// 42. Remove All Non-Letters

// Task: Remove everything except A–Z and a–z.
// Input: "he!!o wor1d"
// Output: "heo word"

// function removeAllNonLetters(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeAllNonLetters("he!!o wor1d"));

// 43. Sum Only Positive Numbers

// Task:
// Input: [-1, 5, 3, -2, 7]
// Output: 15

// function sumOfOnlyPositiveNumbers(array) {
//   let cnt = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       cnt += array[i];
//     }
//   }
//   return cnt;
// }
// console.log(sumOfOnlyPositiveNumbers([-1, 5, 3, -2, 7]));

// 44. Find the Difference Between Max and Min

// Task:
// Input: [4, 10, 2, 8]
// Output: 10 - 2 = 8

// function differenceBetweenMaxAndMin(array) {
//   let sortedArray = array.sort((a, b) => a - b);
//   return sortedArray[sortedArray.length - 1] - sortedArray[0];
// }
// console.log(differenceBetweenMaxAndMin([4, 20, 2, 8]));

// 45. Convert Array of Numbers to String

// Task:
// Input: [1,2,3]
// Output: "123"

// function convertArrayOfNumbersToString(array) {
//   let result = "";
//   for (let i = 0; i < array.length; i++) {
//     result += array[i];
//   }
//   return result;
// }
// console.log(convertArrayOfNumbersToString([1, 2, 3]));

// 46. Multiply Each Element by Its Index

// Task:
// Input: [1, 3, 5]
// Output: [0, 3, 10]

// function multipyEachElementByItsIndex(array) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     ans.push(array[i] * i);
//   }
//   return ans;
// }
// console.log(multipyEachElementByItsIndex([1, 3, 5]));

// 47. Return All Pairs That Sum to Target

// Task:
// Input: [1,2,3,4,5], target = 6
// Output: [[1,5], [2,4]]

// function returnAllPairsThatSumTarget(array, target) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let k = i + 1; k < array.length; k++) {
//       if (array[i] + array[k] === target) {
//         ans.push([array[i], array[k]]);
//       }
//     }
//   }
//   return ans;
// }
// console.log(returnAllPairsThatSumTarget([1, 2, 3, 4, 5], 6));

// 48. Remove Every n-th Element

// Task:
// Input: [1,2,3,4,5,6], n = 2
// Output: [1,3,5]

// function removeEveryNthElement(array, n) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % n !== 0) {
//       ans.push(array[i]);
//     }
//   }
//   return ans;
// }
// console.log(removeEveryNthElement([1, 2, 3, 4, 5, 6], 2));

// 49. Insert a Value at Specific Index

// Task:
// Input: [1,2,3,4], value = 99, index = 2
// Output: [1,2,99,3,4] (without using splice)

//ინდექსამდე ჩვეულებრიად ჩავფუშოთ ახალ ერეიში რიცხვები,ინდექსს როცა მივაღწევთ მერე დავუმატოთ ჩვენი ველიუ და ამ ყველაფრის შემდეგ გავაგრძელოთ ინდექისან ერეის ბოლომდე არსებული ელემენტების ჩაფუშვა

// function insertAValueAtSpecificIndex(array, value, index) {
//   let newArray = [];
//   for (let i = 0; i < index; i++) {
//     newArray.push(array[i]);
//   }
//   newArray.push(value);
//   for (let i = index; i < array.length; i++) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }
// console.log(insertAValueAtSpecificIndex([1, 2, 3, 4], 99, 2));

// 50. Check if String Contains Only Digits

// Task:
// Input: "123456" → true
// Input: "123a56" → false

// function checkIfStringContainsOnlyDigits(str) {
//   return /^[0-9]+$/.test(str);
// }
// console.log(checkIfStringContainsOnlyDigits("123456"));

// 51. Count How Many Times Each Digit Appears

// Task:
// Input: 1122331
// Output: {1:3, 2:2, 3:2}

// function countDigits(num) {
//   let stringedNum = num.toString();
//   let cnt = {};
//   for (let i = 0; i < stringedNum.length; i++) {
//     if (cnt[stringedNum[i]]) {
//       cnt[stringedNum[i]]++;
//     } else {
//       cnt[stringedNum[i]] = 1;
//     }
//   }
//   return cnt;
// }
// console.log(countDigits(1122331));

// 52. Find the Longest Increasing Sequence

// Task:
// Input: [1,2,2,3,4,1,2,3]
// Output: length 4 (sequence: 1,2,3,4)

// function longestIncreasingSequence(array) {
//   let uniqueArray = array.filter((el, index) => array.indexOf(el) === index);
//   return uniqueArray.length;
// }
// console.log(longestIncreasingSequence([1, 2, 2, 3, 4, 1, 2, 3]));

// 53. Rotate Array by k Steps

// Task:
// Input: [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// function rotateArrayByKSteps(array, k) {
//   let ans = [];
//   for (let i = array.length - 1; i > k; i--) {
//     ans.push(array[i]);
//   }
//   for (let i = 0; i <= k; i++) {
//     ans.push(array[i]);
//   }
//   return ans;
// }
// console.log(rotateArrayByKSteps([1, 2, 3, 4, 5], 2));

// 54. Check if a Number is Prime

// Task:
// Input: 7 → true, 8 → false

// function isPrime(number) {
//   if (number < 1) {
//     return false;
//   }
//   for (let i = 2; i <= number; i++) {
//     if (number % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// console.log(isPrime(12));

// 55. Convert Roman Numeral to Integer

// Task:
// Input: "IX" → 9
// Input: "XIV" → 14
//                                     ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// 56. Remove Consecutive Duplicates

// Task:
// Input: [1,1,2,2,2,3,3,1]
// Output: [1,2,3,1]

// function removeConsecutiveDuplicates(array) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== array[i - 1]) {
//       ans.push(array[i]);
//     }
//   }
//   return ans;
// }
// console.log(removeConsecutiveDuplicates([1, 1, 2, 2, 2, 3, 3, 1]));

// 57. Flatten Nested Array (One Level)

// Task:
// Input: [[1,2], 3, [4], 5]
// Output: [1,2,3,4,5]

// function flattenNestedArray(array) {
//   return array.flat();
// }
// console.log(flattenNestedArray([[1, 2], 3, [4], 5]));

// 58. Find All Substrings of a String

// Task:
// Input: "abc"
// Output: ["a","ab","abc","b","bc","c"]

// function findAllSubstringsOfString(str) {
//   let ans = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let k = i + 1; k <= str.length; k++) {
//       ans.push(str.slice(i, k));
//     }
//   }
//   return ans;
// }
// console.log(findAllSubstringsOfString("abc"));

// 59. Group Array Elements by Type

// Task:
// Input: [1, "a", true, 2, "b"]
// Output:

// {
//   number: [1,2],
//   string: ["a","b"],
//   boolean: [true]
// }

// function groupArrayElementsByType(array) {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     let type = typeof array[i];
//     if (!obj[type]) {
//       obj[type] = [];
//     }
//     obj[type].push(array[i]);
//   }
//   return obj;
// }
// console.log(groupArrayElementsByType([1, "a", true, 2, "b"]));

// 60. Reverse Words in a Sentence

// Task:
// Input: "I love coding"
// Output: "coding love I"

// function reverseWordsInaSentence(str) {
//   let splitedStr = str.split(" ");
//   let ans = "";
//   for (let i = splitedStr.length - 1; i >= 0; i--) {
//     const element = splitedStr[i];
//     ans += element + " ";
//   }
//   return ans;
// }
// console.log(reverseWordsInaSentence("I love coding"));

// 61. Merge Two Sorted Arrays

// Task:
// Input: [1,3,5], [2,4,6]
// Output: [1,2,3,4,5,6] (without using .sort())

// function mergeTwoSortedArrays(arr1, arr2) {
//   let tempAns = [];
//   for (let i = 0; i < arr1.length; i++) {
//     tempAns.push(arr1[i]);
//   }
//   for (let k = 0; k < arr2.length; k++) {
//     tempAns.push(arr2[k]);
//   }
//   for (let q = 0; q < tempAns.length; q++) {
//     for (let j = q + 1; j < tempAns.length; j++) {
//       if (tempAns[q] > tempAns[j]) {
//         let temp = tempAns[q];
//         tempAns[q] = tempAns[j];
//         tempAns[j] = temp;
//       }
//     }
//   }
//   return tempAns;
// }
// console.log(mergeTwoSortedArrays([1, 3, 5], [2, 4, 6]));

// 62. Find Second Smallest Number

// Task:
// Input: [5,2,8,1,4]
// Output: 2

// function findSecondSmallestNumber(array) {
//   return array.sort((a, b) => a - b)[1];
// }
// console.log(findSecondSmallestNumber([5, 3, 8, 1, 4]));

// 63. Sum of Diagonal Elements in a Matrix

// Task:
// Input:

// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]

// Output: 1 + 5 + 9 = 15
//                            ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// function sumOfDiagonalElementsInMatrix(array) {}

// 64. Count Character Frequency in a String

// Task:
// Input: "hello world"
// Output: {h:1, e:1, l:3, o:2, " ":1, w:1, r:1, d:1}

// function countCharFreqInString(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]] = obj[str[i]] + 1;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   return obj;
// }
// console.log(countCharFreqInString("hello world"));

// 65. Move Zeros to End of Array

// Task:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// function moveZerosToEndOfArray(array) {
//   let nonZeros = array.filter((el) => el !== 0);
//   let zeros = array.filter((el) => el === 0);
//   return [...nonZeros, ...zeros];
// }
// console.log(moveZerosToEndOfArray([0, 1, 0, 3, 12]));

// 66. Find Missing Number in 1..n

// Task:
// Input: [1,2,4,5] (n=5)
// Output: 3

// 66. Find Missing Number in 1..n

// Task:
// Input: [1,2,4,5] (n=5)
// Output: 3

// function findMissingNumber(array, n) {
//   let currentSum = 0;
//   let expectedSum = 0;
//   for (let i = 0; i < array.length; i++) {
//     currentSum += array[i];
//   }
//   for (let k = 1; k <= n; k++) {
//     expectedSum += k;
//   }
//   return expectedSum - currentSum;
// }
// console.log(findMissingNumber([1, 3, 4, 5], 5));

// 67. Check if Array is a Palindrome

// Task:
// Input: [1,2,3,2,1] → true
// Input: [1,2,3] → false

// function isPalidome(array) {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   if (JSON.stringify(array) === JSON.stringify(newArray)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalidome([1, 2, 3, 2, 1]));

// 68. Count Vowels and Consonants

// Task:
// Input: "hello world"
// Output: {vowels:3, consonants:7}

// function countVowelsAndConsonants(string) {
//   let result = {
//     vowels: 0,
//     consonants: 0,
//   };
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) {
//       result.vowels++;
//     } else if (string[i] >= "a" && string[i] <= "z") {
//       result.consonants++;
//     }
//   }
//   return result;
// }
// console.log(countVowelsAndConsonants("hello world"));

// 69. Find Pairs with Difference k

// Task:
// Input: [1,5,3,4], k=2
// Output: [[1,3],[3,5],[4,2]] (pairs with difference = 2)

// function findPairsWithDifferenceK(array, k) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (Math.abs(array[j] - array[i]) === k) {
//         ans.push([array[i], array[j]]);
//       }
//     }
//   }
//   return ans;
// }
// console.log(findPairsWithDifferenceK([1, 5, 3, 4], 2));

// 70. Sum of Even Fibonacci Numbers ≤ n

// Task:
// Input: 10 → Fibonacci sequence ≤ 10: [1,1,2,3,5,8] → even numbers [2,8] → sum = 10

// function sumOfEvenFibonacciNumbers(number) {
//   let fib = [0, 1];
//   while (true) {
//     let next = fib[fib.length - 1] + fib[fib.length - 2];
//     if (next > number) {
//       break;
//     }
//     fib.push(next);
//   }
//   let ans = 0;
//   for (let i = 0; i < fib.length; i++) {
//     if (fib[i] % 2 === 0) {
//       ans += fib[i];
//     }
//   }
//   return ans;
// }
// console.log(sumOfEvenFibonacciNumbers(10));

// 71. Intersection of Two Arrays (Unique)

// Task:
// Input: [1,2,2,3] and [2,3,4]
// Output: [2,3]

// function intersectionOfTwoArrays(arr1, arr2) {
//   let intersectionArray = [...arr1, ...arr2];
//   let uniques = intersectionArray.filter(
//     (el) => arr1.includes(el) && arr2.includes(el)
//   );
//   let finalAns = uniques.filter((el, index) => uniques.indexOf(el) === index);
//   return finalAns;
// }
// console.log(intersectionOfTwoArrays([1, 2, 2, 3], [2, 3, 4]));

// 72. Check if Two Strings Are Anagrams

// Task:
// Input: "listen", "silent"
// Output: true

// function isAnagram(string1, string2) {
//   let sortedString1 = string1.split("").sort().join("");
//   let sortedString2 = string2.split("").sort().join("");
//   if (sortedString1 === sortedString2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isAnagram("listen", "silent"));

// 73. Find All Divisors of a Number

// Task:
// Input: 12
// Output: [1,2,3,4,6,12]

// function findAllDivisorsOfNumber(number) {
//   let ans = [];
//   for (let index = 0; index <= number; index++) {
//     if (number % index === 0) {
//       ans.push(index);
//     }
//   }
//   return ans;
// }
// console.log(findAllDivisorsOfNumber(12));

// 74. Find the Element Appearing Most Times

// Task:
// Input: [1,2,2,3,3,3,4]
// Output: 3
//                                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// function findElementAppearingMostTimes(array) {
//   let uniques = array.filter(
//     (el) => array.indexOf(el) !== array.lastIndexOf(el)
//   );
//   for (let i = 0; i < uniques.length; i++) {}
// }
// console.log(findElementAppearingMostTimes([1, 2, 2, 3, 3, 3, 4]));

// 75. Find First Non-Repeating Character

// Task:
// Input: "aabbccddeefg"
// Output: "f"

// function firstNonRepeatingCharacter(str) {
//   let splitedStr = str.split("");
//   let nonUniques = splitedStr.filter(
//     (el) => splitedStr.indexOf(el) === splitedStr.lastIndexOf(el)
//   );
//   return nonUniques[0];
// }
// console.log(firstNonRepeatingCharacter("aabbccddeefg"));

// 76. Calculate Running Sum of Array

// Task:
// Input: [1,2,3,4]
// Output: [1,3,6,10]

// function calculateRunningSumOfArray(array) {
//   let ans = [];
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     ans.push(sum);
//   }
//   return ans;
// }
// console.log(calculateRunningSumOfArray([1, 2, 3, 4]));

// 77. Chunk Array into Groups of n

// Task:
// Input: [1,2,3,4,5,6,7], n=3
// Output: [[1,2,3],[4,5,6],[7]]

// function chunkArrayIntoGroups(array, n) {
//   let ans = [];
//   let chunkSize = Math.ceil(array.length / n);
//   for (let i = 0; i < array.length; i += chunkSize) {
//     ans.push(array.slice(i, i + chunkSize));
//   }
//   return ans;
// }
// console.log(chunkArrayIntoGroups([1, 2, 3, 4, 5, 6, 7], 3));

// 78. Remove Duplicate Characters from String

// Task:
// Input: "banana"
// Output: "ban"

// function removeDuplicateCharactersFromString(string) {
//   let splitedString = string.split("");
//   let uniques = splitedString.filter(
//     (el, index) => splitedString.indexOf(el) === index
//   );
//   return uniques.join("");
// }
// console.log(removeDuplicateCharactersFromString("banana"));

// 79. Find the K-th Largest Element

// Task:
// Input: [3,2,1,5,6,4], k=2
// Output: 5 (second largest)

// function findKthLargestElement(array, k) {
//   let sortedArray = array.sort((a, b) => b - a);
//   return sortedArray[k - 1];
// }
// console.log(findKthLargestElement([3, 2, 1, 5, 6, 4], 2));

// 80. Check Balanced Parentheses

// Task:
// Input: "(()())" → true
// Input: ")(()" → false
// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// function isBalanced(string) {
//   // let splitedString = string.split("");
//   // if (splitedString.length % 2 === 1) {
//   //   return false;
//   // }
//   // let firstHalf = [];
//   // let secondHalf = [];
//   // for (let i = 0; i < splitedString.length / 2; i++) {
//   //   firstHalf.push(splitedString[i]);
//   // }
//   // for (let i = splitedString.length - 1; i >= splitedString.length / 2; i--) {
//   //   secondHalf.push(splitedString[i]);
//   // }
//   // if (JSON.stringify(firstHalf === JSON.stringify(secondHalf))) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// }
// console.log(isBalanced("(()())"));

// 81. Remove All Duplicate Values (Keep Only One)

// Task:
// Input: [1,2,2,3,3,3,4]
// Output: [1,2,3,4] (without using Set)

// function removeAllDuplicateValues(array) {
//   let uniques = array.filter((el, index) => array.indexOf(el) === index);
//   return uniques;
// }
// console.log(removeAllDuplicateValues([1, 2, 2, 3, 3, 3, 4]));

// 82. Find the Longest Word in a Sentence

// Task:
// Input: "NestJS makes backend easier"
// Output: "backend"

// function findTheLongestWordInSentence(string) {
//   let splitedString = string.split(" ");
//   let sortedStringArray = splitedString.sort((a, b) => a.length - b.length);
//   return sortedStringArray[sortedStringArray.length - 1];
// }
// console.log(findTheLongestWordInSentence("NestJS makes backend easier"));

// 83. Check if a Number is Perfect

// A perfect number equals the sum of its divisors except itself.
// 6 → 1 + 2 + 3 = 6 → perfect.

// Task: Implement this check.

// function isPerfect(number) {
//   let sum = 0;
//   let divisors = [];
//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       divisors.push(i);
//     }
//   }
//   for (let k = 0; k < divisors.length; k++) {
//     sum += divisors[k];
//   }
//   if (sum === number) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPerfect(200));

// 84. Count Distinct Characters in a String

// Task:
// Input: "hello"
// Output: 4 (h, e, l, o)

// function countDistinctCharactersInString(string) {
//   let splitedString = string.split("");
//   let uniques = splitedString.filter(
//     (el, index) => splitedString.indexOf(el) === index
//   );
//   return [uniques.length, uniques];
// }
// console.log(countDistinctCharactersInString("hello"));

// 85. Remove All Elements Greater Than n

// Task:
// Input: [1,4,2,6,3], n=3
// Output: [1,2,3]

// function removeAllElementsGreaterThanN(array, n) {
//   return array.filter((el) => el <= n);
// }
// console.log(removeAllElementsGreaterThanN([1, 4, 2, 6, 3], 3));

// 86. Calculate Average of Array

// Task:
// Input: [10, 20, 30]
// Output: 20

// function calculateAverageOfArray(array) {
//   let average = 0;
//   for (let i = 0; i < array.length; i++) {
//     average += array[i];
//   }
//   return average / array.length;
// }
// console.log(calculateAverageOfArray([10, 20, 30]));

// 87. Convert Array of Objects to One Object

// Task:
// Input:

// [
//   {a: 1},
//   {b: 2},
//   {c: 3}
// ]

// Output:

// {a:1, b:2, c:3}
//  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// function convertArrayOfObjectsToOneObject(array) {
//   return array.flat();
// }
// console.log(convertArrayOfObjectsToOneObject([{ a: 1 }, { b: 2 }, { c: 3 }]));

// 88. Compare Two Objects (Shallow)

// Task:
// Return true if both objects have the same keys & values.

// Example:
// {a:1, b:2} and {a:1, b:2} → true

// function compareTwoObjects(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }
// console.log(compareTwoObjects({ a: 1, b: 2 }, { a: 1, b: 2 }));

// 89. Find All Unique Pairs That Multiply to Target

// Task:
// Input: [2,4,1,6,5,3], target = 6
// Output: [[2,3],[1,6]]

// function findAllUniquePairsThatMultiplyToTarget(array, target) {
//   let ans = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let k = i + 1; k < array.length; k++) {
//       if (array[i] * array[k] === target) {
//         ans.push([array[i], array[k]]);
//       }
//     }
//   }
//   return ans;
// }
// console.log(findAllUniquePairsThatMultiplyToTarget([2, 4, 1, 6, 5, 3], 6));

// 90. Find the Index Where Sum Left = Sum Right

// Find the index where left-side sum equals right-side sum.

// Task:
// Input: [1,2,3,4,6]
// Output: 3
// Because:

// left side of index 3 → 1+2+3 = 6

// right side → 6

// function findTheIndexWhereSumLeftEqualsSumRight(array) {
//   let totalSum = 0;
//   for (let i = 0; i < array.length; i++) {
//     totalSum += array[i];
//   }
//   let leftSum = 0;
//   for (let i = 0; i < array.length; i++) {
//     let rightSum = totalSum - leftSum - array[i];
//     if (leftSum === rightSum) {
//       return i;
//     }
//     leftSum += array[i];
//   }
//   return -1;
// }
// console.log(findTheIndexWhereSumLeftEqualsSumRight([1, 2, 3, 4, 6]));

// 91. Find All Numbers That Appear More Than Once

// Input: [1,2,3,2,4,1]
// Output: [1,2]

// function findAllNumbersThatAppearMoreThanOnce(array) {
//   let nonUniques = array.filter(
//     (el) => array.indexOf(el) !== array.lastIndexOf(el)
//   );
//   let nonUniquesOnlyOnce = nonUniques.filter(
//     (el, index) => nonUniques.indexOf(el) === index
//   );
//   return nonUniquesOnlyOnce;
// }
// console.log(findAllNumbersThatAppearMoreThanOnce([1, 2, 3, 2, 4, 1]));

// 92. Replace All Spaces With Hyphens

// Input: "hello world js"
// Output: "hello-world-js"

//solution N1

// function replaceAllSpacesWithHyphens(string) {
//   return string.replaceAll(" ", "-");
// }
// console.log(replaceAllSpacesWithHyphens("hello world js"));

//solution N2

// function replaceAllSpacesWithHyphens(string) {
//   let ans = "";
//   let splitedString = string.split(" ");
//   for (let i = 0; i < splitedString.length; i++) {
//     ans = ans + splitedString[i];
//     if (i < splitedString.length - 1) {
//       ans += "-";
//     }
//   }
//   return ans;
// }

// console.log(replaceAllSpacesWithHyphens("hello world js"));

// 93. Find the Index of the Largest Number

// Input: [10, 25, 3, 7]
// Output: 1

// function findIndexOfLargestNumber(array) {
//   let max = array[0];
//   let maxIndex = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }

// console.log(findIndexOfLargestNumber([10, 25, 3, 7]));

// 94. Convert an Array of Numbers to an Array of Strings

// Input: [1,2,3]
// Output: ["1","2","3"]

// function convertArrayOfNumbersToStrings(array) {
//   let ans = "";
//   for (let i = 0; i < array.length; i++) {
//     ans += array[i];
//   }
//   return ans.split("");
// }
// console.log(convertArrayOfNumbersToStrings([1, 2, 3]));

// 95. Find All Substrings of a String

// Input: "abc"
// Output: ["a","ab","abc","b","bc","c"]

// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// 96. Find the Average of an Array of Numbers

// Input: [2,4,6,8]
// Output: 5

// function average(array) {
//   let avg = 0;
//   for (let i = 0; i < array.length; i++) {
//     avg += array[i];
//   }
//   return avg / array.length;
// }
// console.log(average([2, 4, 6, 8]));

// 97. Check If Two Strings Are Anagrams

// Input: "listen" & "silent"
// Output: true

// function isAnagram(str1, str2) {
//   let splitedStr1 = str1.split("").sort();
//   let splitedStr2 = str2.split("").sort();
//   return JSON.stringify(splitedStr1) === JSON.stringify(splitedStr2);
// }
// console.log(isAnagram("listen", "silent"));

// 98. Remove All Numbers From a String

// Input: "a1b2c3d"
// Output: "abcd"

// function removeAllNumbersFromString(string) {
//   let ans = "";
//   let splitedString = string.split("");
//   for (let i = 0; i < splitedString.length; i++) {
//     if (isNaN(splitedString[i])) {
//       ans += splitedString[i];
//     }
//   }
//   return ans;
// }
// console.log(removeAllNumbersFromString("a1b2c3d"));

// 99. Count How Many Times a Number Appears in an Array

// Input: arr = [1,2,3,2,2,4], num = 2
// Output: 3

// function countHowManyTimesNumberAppearInAnArray(array, number) {
//   let cnt = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       cnt++;
//     }
//   }
//   return cnt;
// }
// console.log(countHowManyTimesNumberAppearInAnArray([1, 2, 3, 2, 2, 4], 2));

// 100. Convert an Array Into an Object With Index as Key

// Input: ["a","b","c"]
// Output: {0: "a", 1: "b", 2: "c"}

// function convertArrayIntoObjectWithIndexKey(array) {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     obj[i] = array[i];
//   }
//   return obj;
// }
// console.log(convertArrayIntoObjectWithIndexKey(["a", "b", "c"]));

// const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];
// const ages = [25, 30, 22, 28, 35, 27, 31];
// const users = [
//   { name: "Alice", age: 25, city: "New York" },
//   { name: "Bob", age: 30, city: "London" },
//   { name: "Charlie", age: 22, city: "Paris" },
//   { name: "David", age: 28, city: "Berlin" },
//   { name: "Eve", age: 35, city: "Tokyo" },
// ];

// Task 1: Filter Names Starting With 'A'

// Input: names

// Output: ["Alice"]

// function filterNames(names) {
//   return names.filter((name) => name.startsWith("A"));
// }
// console.log(filterNames(names));

// Task 2: Increase All Ages by 1

// Input: ages

// Output: [26, 31, 23, 29, 36, 28, 32]

// function increaseAllAgesByOne(ages) {
//   let increasedAges = [];
//   for (let i = 0; i < ages.length; i++) {
//     increasedAges.push(ages[i] + 1);
//   }
//   return increasedAges;
// }
// console.log(increaseAllAgesByOne(ages));

// Task 3: Find Users Older Than 28

// Input: users

// Output: [{ name: "Bob", ... }, { name: "Eve", ... }]

// function findUsersOlderThan28(users) {
//   return users.filter((user) => user.age > 28);
// }
// console.log(findUsersOlderThan28(users));

// Task 4: Sort Names Alphabetically

// Input: names

// Output: ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]

// function sortNames(names) {
//   return names.sort();
// }
// console.log(sortNames(names));

// Task 5: Get Array of User Names

// Input: users

// Output: ["Alice", "Bob", "Charlie", "David", "Eve"]

// function getArrayOfUserNames(users) {
//   let userNames = users.map((user) => user.name);
//   return userNames;
// }
// console.log(getArrayOfUserNames(users));

// Task 6: Find Average Age

// Input: ages

// Output: 28.29 (sum / count)

// function findAverageAge(ages) {
//   let cnt = 0;
//   let ans = 0;
//   for (let i = 0; i < ages.length; i++) {
//     cnt += ages[i];
//     ans = cnt / ages.length;
//   }
//   return ans;
// }
// console.log(findAverageAge(ages));

// Task 7: Find Index of "Charlie"

// Input: names

// Output: 2

// function findIndexOfCharlie(names) {
//   for (let i = 0; i < names.length; i++) {
//     if (names[i] === "Charlie") {
//       return i;
//     }
//   }
// }
// console.log(findIndexOfCharlie(names));

// Task 8: Add a New User

// Add: { name: "Hannah", age: 29, city: "Rome" }

// Output: updated users array

// function addNewUser(users) {
//   return [...users, { name: "Hannah", age: 29, city: "Rome" }];
// }
// console.log(addNewUser(users));

// Task 9: Remove Users from a Specific City

// Remove all users from "Paris"

// Output: updated users array

// function removeUserFromSpecificCity(users) {
//   return users.filter((user) => user.city !== "Paris");
// }
// console.log(removeUserFromSpecificCity(users));

// Task 10: Create Array of Strings "Name (Age)

// Input: users

// Output: ["Alice (25)", "Bob (30)", ...]

// function createArrayOfStrings(users) {
//   return users.map((user) => `${user.name} (${user.age})`);
// }
// console.log(createArrayOfStrings(users));

// const strings = [
//   "hi",
//   "hello",
//   "good day",
//   "nice weather",
//   "very hot summer day",
//   "cold winter night",
//   "fast code",
//   "clean backend architecture",
//   "learning JavaScript",
//   "deep dive into algorithms",
//   "NestJS MongoDB project setup",
//   "simple task",
//   "hard interview question",
//   "junior backend dev",
//   "build scalable REST API",
//   "test",
//   "write clean readable code",
//   "small bug",
//   "fix critical production issue",
//   "done",
// ];

// function foo(strings) {
//   const vowels = ["a", "e", "o", "i", "u"];
//   let moreThanFour = [];
//   let result = [];
//   for (let i = 0; i < strings.length; i++) {
//     let splitedString = strings[i].split(" ");
//     if (splitedString.length >= 4) {
//       moreThanFour.push(strings[i]);
//     }
//   }
//   for (let i = 0; i < moreThanFour.length; i++) {
//     let vowelsCounter = 0;
//     const text = moreThanFour[i].toLowerCase();
//     for (let k = 0; k < text.length; k++) {
//       if (vowels.includes(text[k])) {
//         vowelsCounter += 1;
//       }
//     }
//     result.push({
//       text: moreThanFour[i],
//       vowelsCount: vowelsCounter,
//     });
//   }
//   return result;
// }
// console.log(foo(strings));

// const texts = [
//   "short text",
//   "this is a longer sentence",
//   "backend development with NestJS",
//   "hi",
//   "clean code principles matter",
// ];
// ამოცანა:

// ამოიღე სტრინგები, რომლებსაც აქვთ 3 ან მეტი სიტყვა

// თითოეულზე დააბრუნე:

// {
//   text: "...",
//   wordsCount: number,
//   charsCount: number // space-ების გარეშე
// }

// function foo(texts) {
//   let ans = [];
//   let moreThanThreeWords = [];
//   for (let i = 0; i < texts.length; i++) {
//     if (texts[i].split(" ").length >= 3) {
//       moreThanThreeWords.push(texts[i]);
//     }
//   }
//   for (let k = 0; k < moreThanThreeWords.length; k++) {
//     let words = moreThanThreeWords[k].split(" ");
//     ans.push({
//       text: words.join(" "),
//       wordsCount: words.length,
//       charsCount: words.join("").length,
//     });
//   }
//   return ans;
// }
// console.log(foo(texts));

// დატოვე მხოლოდ ის სტრინგები, რომლებიც შეიცავს 4 ან მეტ სიტყვას

// თითოეულ ასეთ სტრინგში დაითვალე ხმოვანი ასოების რაოდენობა

// დააბრუნე მასივი ასეთი ობიექტებით:

// [
//   { text: "javascript is very powerful", vowels: 9 },
//   { text: "clean code matters a lot", vowels: 8 }
// ]

// function foo(texts) {
//   let ans = [];
//   let moreThanFourWords = [];
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < texts.length; i++) {
//     if (texts[i].split(" ").length >= 4) {
//       moreThanFourWords.push(texts[i]);
//     }
//   }
//   for (let i = 0; i < moreThanFourWords.length; i++) {
//     let vowelsCount = 0;
//     let text = moreThanFourWords[i];
//     for (let k = 0; k < text.length; k++) {
//       if (vowels.includes(text[k])) {
//         vowelsCount += 1;
//       }
//     }
//     ans.push({
//       string: text,
//       vowels: vowelsCount,
//     });
//   }
//   return ans;
// }
// console.log(foo(texts));

// const strings = [
//   "hi",
//   "hello",
//   "good day",
//   "nice weather",
//   "very hot summer day",
//   "cold winter night",
//   "fast code",
//   "clean backend architecture",
//   "learning JavaScript",
//   "deep dive into algorithms",
//   "NestJS MongoDB project setup",
//   "simple task",
//   "hard interview question",
//   "junior backend dev",
//   "build scalable REST API",
//   "test",
//   "write clean readable code",
//   "small bug",
//   "fix critical production issue and so on",
//   "done",
// ];

// function foo(strings) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let answer = [];
//   let moreThanFourWords = [];
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i].split(" ").length >= 4) {
//       moreThanFourWords.push(strings[i]);
//     }
//   }
//   for (let i = 0; i < moreThanFourWords.length; i++) {
//     let vowelsCount = 0;
//     let eachString = moreThanFourWords[i];
//     let wordsCount = eachString.split(" ").length;
//     for (let k = 0; k < eachString.length; k++) {
//       if (vowels.includes(eachString[k])) {
//         vowelsCount += 1;
//       }
//     }
//     answer.push({
//       string: eachString,
//       words: wordsCount,
//       vowels: vowelsCount,
//     });
//   }
//   return answer;
// }
// console.log(foo(strings));

// const strings = [
//   "hello world",
//   "user123 logged in",
//   "error 404 page not found",
//   "version2 release",
//   "clean code",
//   "task 7 completed successfully",
//   "build v3 api service",
//   "no numbers here",
//   "step 1 initialize project",
//   "top10 programming tips",
//   "room 42 is empty",
//   "final result",
//   "3 quick fixes applied",
//   "backend dev level2",
//   "just text",
// ];

// function foo(strings) {
//   let onlyWithNumbers = [];
//   let regex = /\d/;
//   let answer = [];
//   for (let i = 0; i < strings.length; i++) {
//     if (regex.test(strings[i])) {
//       onlyWithNumbers.push(strings[i]);
//     }
//   }
//   for (let i = 0; i < onlyWithNumbers.length; i++) {
//     let digitCounter = 0;
//     let eachString = onlyWithNumbers[i];
//     for (let k = 0; k < eachString.length; k++) {
//       if (regex.test(eachString[k])) {
//         digitCounter += 1;
//       }
//     }
//     answer.push({
//       string: eachString,
//       digitCount: digitCounter,
//     });
//   }
//   return answer;
// }
// console.log(foo(strings));

// PROBLEM 2: Find Most Frequent Element
// Given an array of tags, return the tag that appears most frequently
// Input: ["javascript", "typescript", "nodejs", "nodejs", "typescript", "nodejs"]
// Output: "javascript"
// function findMostFrequent(arr) {
//   let sortedArray = arr.sort(
//     (a, b) =>
//       arr.filter((word) => word === a).length -
//       arr.filter((word) => word === b).length
//   );
//   return sortedArray.pop();
// }
// console.log(
//   findMostFrequent([
//     "javascript",
//     "typescript",
//     "javascript",
//     "nodejs",
//     "typescript",
//     "javascript",
//   ])
// );

// const users = [
//   { name: "Alice", city: "Berlin" },
//   { name: "Bob", city: "Berlin" },
//   { name: "Charlie", city: "Paris" },
//   { name: "David", city: "Paris" },
//   { name: "Eve", city: "London" },
// ];

// Group Users by City
// Given an array of user objects with name and city, return an object where keys are cities and values are arrays of user names in that city.

// function groupUsersByCity(users) {
//   let ans = {};
//   for (let i = 0; i < users.length; i++) {
//     let city = users[i].city;
//     let name = users[i].name;
//     if (ans[city]) {
//       ans[city].push(name);
//     } else {
//       ans[city] = [name];
//     }
//   }
//   return ans;
// }
// console.log(groupUsersByCity(users));

// const users = [
//   { name: "Alice", isActive: true },
//   { name: "Bob", isActive: false },
//   { name: "Charlie", isActive: true },
//   { name: "David", isActive: false },
//   { name: "Eve", isActive: true },
// ];

// Filter Active Users
// Given an array of user objects with name and isActive (boolean), return a new array containing only active users.

// function filterActiveUsers(users) {
//   return users.filter((user) => user.isActive === true);
// }
// console.log(filterActiveUsers(users));

// const cart = [
//   { item: "Shirt", price: 20, quantity: 2 },
//   { item: "Pants", price: 35, quantity: 1 },
//   { item: "Hat", price: 10, quantity: 3 },
// ];

// Shopping Cart Total
// Given an array of cart items with price and quantity, calculate the total cost of all items.

// function shoppingCartTotal(cart) {
//   let total = 0;
//   for (let i = 0; i < cart.length; i++) {
//     let eachElementTotalPrice = cart[i].price * cart[i].quantity;
//     total += eachElementTotalPrice;
//   }
//   return total;
// }
// console.log(shoppingCartTotal(cart));

// const emails = [
//   "alice@example.com",
//   "bob@example.com",
//   "alice@example.com",
//   "charlie@example.com",
//   "bob@example.com",
// ];

// Remove Duplicate Emails
// Given an array of email strings, return a new array with duplicates removed.

// function removeDuplicateEmails(emails) {
//   return emails.filter((email, index) => emails.indexOf(email) === index);
// }
// console.log(removeDuplicateEmails(emails));

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 15 },
//   { name: "Eve", age: 40 },
// ];
// const ageLimit = 18;

// Find Users Over Age
// Given an array of user objects with name and age, return an array of names of users older than a given age.

// function findUsersOverAge(users, ageLimit) {
//   let answer = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age > ageLimit) {
//       answer.push(users[i]);
//     }
//   }
//   return answer;
// }
// console.log(findUsersOverAge(users, ageLimit));

// const nestedArrays = [[1, 2], [3, 4, 5], [6], [7, 8]];

// Flatten Nested Arrays
// Given an array of arrays (e.g., [[1,2],[3,4],[5]]), return a single flat array (e.g., [1,2,3,4,5]).

// function flattenNestedArrays(nestedArrays) {
//   return nestedArrays.flat();
// }
// console.log(flattenNestedArrays(nestedArrays));

// const products = [
//   { name: "Shirt", sold: 150 },
//   { name: "Pants", sold: 90 },
//   { name: "Hat", sold: 200 },
//   { name: "Shoes", sold: 120 },
//   { name: "Jacket", sold: 50 },
// ];

// Top Selling Products
// Given an array of product objects with name and sold count, return the top 3 best-selling products.

// Count Users per Role

// function topSellingProducts(products) {
//   let sortedProducts = products.sort((a, b) => b.sold - a.sold);
//   return sortedProducts.slice(0, 3);
// }
// console.log(topSellingProducts(products));

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "user" },
//   { name: "David", role: "admin" },
//   { name: "Eve", role: "moderator" },
// ];

// Count Users per Role
// Given an array of user objects with name and role (admin, user, etc.), return an object showing the number of users for each role.

// function countUsersPerRole(users) {
//   let ans = {};
//   for (let i = 0; i < users.length; i++) {
//     let userRole = users[i].role;
//     if (ans[userRole]) {
//       ans[userRole] = ans[userRole] + 1;
//     } else {
//       ans[userRole] = 1;
//     }
//   }
//   return ans;
// }
// console.log(countUsersPerRole(users));

//sleep function

// const sleep = (second) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, second * 1000);
//   });

// async function foo() {
//   console.log(1);
//   await sleep(3);
//   console.log(2);
// }
// foo();
