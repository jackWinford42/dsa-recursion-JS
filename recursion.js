/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) return nums[0];
  const beginning = nums[0];
  const end = nums.pop();
  nums[0] = beginning * end;
  
  return product(nums)
}
/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length
  const end = words.pop();
  if (end.length > words[0].length) words[0] = end;
  return longest(words)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length < 2) return str;
  return str.substring(0,1) + everyOther(str.substring(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  let strArr = str.split('');
  const last = strArr.pop();
  const first = strArr.shift();
  if (last !== first) return false;
  return isPalindrome(strArr.join(''))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (!arr.length) return -1;
  const first = arr[0];
  if (typeof arr[arr.length - 1] === "number") arr[arr.length - 1]++;
  else arr = [...arr, 0]
  if (val === first) return arr[arr.length - 1];
  return findIndex([...arr.slice(1)], val);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) return str;
  let strArr = str.split('');
  const last = strArr.pop();
  const first = strArr.shift();
  return last + revString(strArr.join('')) + first
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  Object.keys(obj).some(function(key) {
    if (obj[key] && typeof obj[key] === 'string') {
      strings.push(obj[key])
    }
    if (obj[key] && typeof obj[key] === 'object') {
      strings.push(...gatherStrings(obj[key]))
    }
  });
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
