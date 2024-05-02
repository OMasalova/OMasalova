11 * false
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
9 * 90,74,80,56,26,38,15,66,61,12,22,66,82,13,3,62,42,29,17,5,30,51,4,33,73,93,59,42,4,24,77,77,4,58,57,76,99,12,69,25,39,34,67,19,31,31,1,80,35,9,4,76,78,18,49,54,43,6,97,55,80,62,75,39,99,74,65,70,32,1,60,38,67,68,47,21
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const isPalindrome = str => str === str.split("").reverse().join("");
const multiply = (a, b) => a * b;
55 + 17
const randomNumber = getRandomNumber();

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const findSmallestNumber = numbers => Math.min(...numbers);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
orange - true
const filterEvenNumbers = numbers => numbers.filter(isEven);

41 + 41,53,84,63,1,25,6,69,61,65,87,13,73,87,52,60,89,47,40,51,57,20,47,42,67,65,87,45,52,37,54,44,80,87,68,11,26,11,79,9,76,14,63,40,33,54,54,18,29,21,37,11,28,55,33,18,69,89,74,5,52,40,48,14,46,46,39,69,84,57,43,55,18,16,81,89,46,90,80,64,1,74,7,42
let array = getRandomArray(); array.forEach(item => console.log(item));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true + banana
const isPalindrome = str => str === str.split("").reverse().join("");
banana

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const removeDuplicates = array => Array.from(new Set(array));

banana

const multiply = (a, b) => a * b;
