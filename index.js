function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
function increment(n) {
    return (n += 1);
}
function decrement(n) {
    return (n -= 1);
}
function makeInt(string) {
    const parsed = parseInt(string, 10);
    return parsed;
}
function preserveDecimal(string) {
    const parsed = parseFloat(string)
    return parsed;
}