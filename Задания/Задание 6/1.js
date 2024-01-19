const myStr = "pizza";

const reverseString = (str) => {
  const reversed = [];
  for (let i = str.length; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
};

const reverseString2 = (str) => {
  return str.split("").reverse().join;
};

const reverseResult = reverseString(myStr);
console.log(reverseResult);
console.log(reverseString2(myStr))
