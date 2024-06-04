//==============(*)==============[-100 Days of code challenge-]==============(*)==============//

//=================-=================(Today Is Day No 5)=================-=================//

//====-=====(Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again for new invitations.)=====-====//

//===================(<>)==================(Q-15)==================(<>)====================//


let guests: string[] = ["Asharib Ali", "Hunain Hyder", "Ahmed sheikh"];


guests.forEach(guests =>{ 
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});

//=========( This guest in unableToAttend the dinner )=========//
let unableToAttend = "Ahmed sheikh";
console.log(`${unableToAttend} can't make it to dinner.`);

//=========( Replace the guest )=========//
let newGuest = "Ameen Alam";
guests[guests.indexOf(unableToAttend)] = newGuest;

//=========( New invitations )=========// 
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

if (true || false) {}
