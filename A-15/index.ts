// 15. Start with your program from Exercise 14. Add a print statement at the end of your program stating
//  the name ofthe guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
//  you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guests: string[] = ["Sumaiya", "Laiba", "Mariam"];

for (let a=0; a < guests.length; a++){
    console.log(`Dear ${guests[a]},\n \t You Are Invited At My Home Tonight For Dinner. \n`);
    }
    console.log( `Unfortunatily ${guests[1]}, will not be able to join us today.` );
    guests[1] = "Faiza";
    console.log("NEW LIST OF INVITATION:\n");
    for ( let a=0; a < guests.length; a++){
console.log(`Dear ${guests[a]},\n \t You Are Invited At My Home Tonight For Dinner. \n`);
    }
