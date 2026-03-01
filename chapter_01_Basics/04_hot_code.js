console.log('Hello...!')

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

let result;

for (let i = 0; i < 10; i++) {
    result = add(i, i + 1);
    console.log(result);
}

