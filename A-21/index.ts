// They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface type {
    Name: string, Age: number, Profession: string
}

let OBJ:type = {Name: "Irza", Age: 22, Profession: "Student"};

console.log("\n Object Having Info About ME:");

console.log(`My name is: ${OBJ.Name}.`);
console.log(`I am ${OBJ.Age} years old.`);
console.log(`I am a ${OBJ.Profession}.`);