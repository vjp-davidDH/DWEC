let array = [1, 2, 3, 4]
console.log(array.join('#'));

array.unshift(-1, 0);
console.log(array.join('#'));

array.push(5, 6, 7);
console.log(array.join('#'));

array.splice(2, 3)
console.log(array.join('#'));

array.splice(array.length -1, 0, 8, 9);
console.log(array.join('#'));