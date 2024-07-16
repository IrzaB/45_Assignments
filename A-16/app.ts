// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
// guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people
// that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests: string[] = ["Faiza", "Sumaiyya", "Marriam"];

console.log("NEW LIST OF INVITATION:\n");
for (let a = 0; a < guests.length; a++) {
  console.log(
    `Dear ${guests[a]},\n \t You Are Invited At My Home Tonight For Dinner. \n`
  );
}
console.log(
  "Good News! We`ve found a bigger dinner table, so more space is available, So our new guests are :\n"
);

guests.unshift("Iqra");
guests.splice(guests.length / 2, 0, "Ruqaiya");
guests.push("Sidra");

for (let a = 0; a < guests.length; a++) {
  console.log(
    `Dear ${guests[a]},\n \t You Are Invited At My Home Tonight For Dinner. \n`
  );
}
