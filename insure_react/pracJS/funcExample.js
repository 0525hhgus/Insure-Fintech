function plus(p1, p2) {
    return p1 + p2;
}

const plus2 = (p1, p2) => {
    return p1 + p2;
};

// - * / 3가지 연산을 Arrow function(es6) 선언해주세요
const minus = (p1, p2) => {
    return p1 - p2;
};

const multiple = (p1, p2) => {
    return p1 * p2;
};

const divide = (p1, p2) => {
    return p1 / p2;
};

console.log(plus(1, 2))
console.log(plus2(1, 2))
console.log(minus(1, 2))
console.log(multiple(1, 2))
console.log(divide(1, 2))