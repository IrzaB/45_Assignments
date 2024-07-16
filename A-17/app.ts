//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
// only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
// name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

let guests: string[] = ["Faiza", "Sumaiyya", "Marriam"];

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
console.log(
  "Unfortunately, the new dinner table won`t arrive in time, so we can only invite two people for dinner. \n"
);
while (guests.length>2){
    let notInvited = guests.pop()
    console.log(`Sorry, Due to limited space We Can not Invite You Miss.${notInvited} \n`);
}
for (let a = 0; a < guests.length; a++) {
    console.log(
      `Dear ${guests[a]},\n \t You Are Still Invited to Dinner. \n`)
};
guests.pop()
guests.pop()

console.log(guests);