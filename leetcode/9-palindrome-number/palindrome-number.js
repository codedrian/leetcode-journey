//this is the first solution I came up with
var isPalindrome = function (x) {
  let modifiedPalindrome = x.toString().split("").reverse().join("");
  let originalPalindrome = x.toString();

  return modifiedPalindrome === originalPalindrome;
};

//TODO: try to solve this problem without converting the number to a string
