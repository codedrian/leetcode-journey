//1. Check if current iteration is equals to ([{
//2. If so, push it into stack
//else if current iteration is equal to }]) and if the previous iteration matches the opening pop it
var isValid = function (s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
			stack.push(s[i]);
		} else if (
			(s[i] === '}' && stack[stack.length - 1] === '{') ||
			(s[i] === ']' && stack[stack.length - 1] === '[') ||
			(s[i] === ')' && stack[stack.length - 1] === '(')
		) {
			stack.pop();
		}
	}
	// return stack.length === 0;
console.log(stack.length === 0);
};

isValid('([{}])'); //true
isValid('()'); //true
isValid('()[]{}'); //true
isValid('(]'); //false
