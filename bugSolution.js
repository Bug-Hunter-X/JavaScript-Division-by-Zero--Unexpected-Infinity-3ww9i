function foo(a, b) {
    if (a === 0 || b === 0) {
        return 0; // or throw new Error('Division by zero');
    }
    return a / b;
}

console.log(foo(10, 0)); // Outputs 0
console.log(foo(0, 10)); // Outputs 0
console.log(foo(0, 0)); // Outputs 0