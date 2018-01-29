/**
 * 1. 给定一个数组，里面有若干个1和若干个2，现在需要将所有的1放到数组左边，所有的2放到数组右边，时间复杂度O(n)，空间复杂度O(1)。请实现这个排序算法。
 * @param arr
 * @returns {*}
 */
function functionQ1(arr) {
  var pointLeft = 0;
  var pointRight = arr.length - 1;

  for (; pointLeft < pointRight;) {
    if (arr[pointLeft] === 2) {
      if (arr[pointRight] === 1) {
        var temp = arr[pointLeft];
        arr[pointLeft] = arr[pointRight];
        arr[pointRight] = temp;
      } else {
        pointRight--;
      }
    } else {
      pointLeft++;
    }
  }
  return arr;
}

let arr = [1, 1, 2, 2, 1, 2, 1];
console.log(functionQ1(arr)); //[ 1, 1, 1, 1, 2, 2, 2 ]

/**
 * 2. 给定字符串，输出括号是否匹配。
 * @param str
 * @returns {boolean}
 */
function functionQ2(str) {
  let leftParenthesis = 0;
  let isValid = true;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '(') {
      leftParenthesis++;
    } else if (str.charAt(i) === ')') {
      leftParenthesis--;
    }
    if (leftParenthesis < 0) {
      isValid = false;
    }
  }

  return leftParenthesis === 0 ? isValid : false;
}

console.log(functionQ2("()")); //true
console.log(functionQ2(")(")); //false
console.log(functionQ2("(abcd(e)")); //false
console.log(functionQ2("(a)(b)")); //true

/**
 * 3. 用js写一个函数f，满足 f(a,b) = f(a)(b) = a + b，意思是 函数f 在多个参数下的返回是不同的，需要支持题目中的调用方式，即支持传入两个参数，也支持分两次传入，最终完成 a+b 的操作。
 * @param a
 * @param b
 * @returns {*}
 */
function functionQ3(a, b) {
  if (typeof b === 'undefined') {
    return function (b) {
      return a + b;
    };
  } else {
    return a + b;
  }

}

let a = 1, b = 2;
console.log(functionQ3(a)(b)); //3
console.log(functionQ3(a, b)); //3
