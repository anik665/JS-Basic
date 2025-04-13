var friendsage=[12,34,56,67,78,];
var position=friendsage.indexOf(78);
console.log(position);
console.log(friendsage);

console.log(friendsage.length);
friendsage.push(69);//add an element last of the index
console.log(friendsage);
friendsage.pop(886);//removed of an element of the last
console.log(friendsage);
friendsage.unshift(99);//add an element of first index
console.log(friendsage);
friendsage.shift();//remove at first element of the endex.
console.log(friendsage);
friendsage.shift();
console.log(friendsage);
var removed=friendsage.splice(2,1);
console.log(friendsage);


var part= friendsage.slice(3);//removed the element first to this .
console.log(part);
delete friendsage[1]; //remove specific element;
console.log(friendsage);