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
