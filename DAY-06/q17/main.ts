//==============(*)==============[-100 Days of code challenge-]==============(*)==============//

//=================-=================(Today Is Day No 6)=================-=================//

//====-=====(Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.)=====-====//

//===================(<>)==================(Q-17)==================(<>)====================//


console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list