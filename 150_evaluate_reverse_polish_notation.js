var evalRPN = function(tokens) {
    let stack = [];
    let curr = 0;
    while (curr < tokens.length) {
        if (["+", "-", "/", "*"].includes(tokens[curr])) {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(op[tokens[curr]](Number(a), Number(b)))
        } else {
            stack.push(Number(tokens[curr]))
        }
        curr++;
    }
    return stack[0]
};

const op = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => Math.trunc(a / b),
    "*": (a, b) => a * b,
}

console.log(evalRPN(["2", "1", "+", "3", "*"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
