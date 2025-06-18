let obj = {1: 'a', 2: 'b', 3: 'c'};

let set = new Set([1, 2, 3, 4, 5]);

console.log(obj.hasOwnProperty('1')); //true
console.log(obj.hasOwnProperty(1)); // true
console.log(set.has('1')); 
console.log(set.has(1)); //true