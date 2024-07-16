// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for
// the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

let car: string = `subaru`;

console.log("\n 5 TESTS EVALUATE TO (TRUE):");

// Test:1
console.log("Is car == `subaru`? I predict True.");
console.log(car === `subaru`);

// Test:2
console.log("Is car != `toyota`? I predict True.");
console.log(car !== `toyota`);

// Test:3
console.log("Is the length of car > 4? I predict True.");
console.log(car.length > 4);

// Test:4
console.log("Is the length of car <= 6? I predict True.");
console.log(car.length <= 6);

// Test:5
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s'));

console.log("\n 5 TESTS EVALUATE TO (FALSE):");

// Test:1
console.log("Is car == `honda`? I predict False.");
console.log(car === `honda`);

// Test:2
console.log("Is car in Uppercase? I predict False.");
console.log(car.toUpperCase() === car);

// Test:3
console.log("Is car === `Subaru`? I predict False.");
console.log(car === 'Subaru');

// Test:4
console.log("Is car == `Audi`? I predict False.");
console.log(car === 'Audi');

// Test:5
console.log("Is the length of the car === 7 ? I predict False.");
console.log(car.length === 7);