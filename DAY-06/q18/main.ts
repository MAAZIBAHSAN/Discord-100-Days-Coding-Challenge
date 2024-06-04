//==============(*)==============[-100 Days of code challenge-]==============(*)==============//

//=================-=================(Today Is Day No 6)=================-=================//

//====-=====(Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.)=====-====//

//===================(<>)==================(Q-18)==================(<>)====================//


//=======(real array is not modified because we use spread opertor for make a copy of an aaray and then work on it)=======//

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);