//==============(*)==============[-100 Days of code challenge-]==============(*)==============//
//=================-=================(Today Is Day No 5)=================-=================//
//====-=====(Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again for new invitations.)=====-====//
//===================(<>)==================(Q-15)==================(<>)====================//
var guests = ["Asharib Ali", "Hunain Hyder", "Ahmed sheikh"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", would you like to join me for dinner?"));
});
//=========( This guest in unableToAttend the dinner )=========//
var unableToAttend = "Ahmed sheikh";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//=========( Replace the guest )=========//
var newGuest = "Ameen Alam";
guests[guests.indexOf(unableToAttend)] = newGuest;
//=========( New invitations )=========// 
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
var text = "Hello world, welcome to the universe.";
var result = text.indexOf("welcome");
console.log(result);
