//==============(*)==============[-100 Days of code challenge-]==============(*)==============//

//=================-=================(Today Is Day No 6)=================-=================//

//====-=====(Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.)=====-====//

//===================(<>)==================(Q-16)==================(<>)====================//

let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});