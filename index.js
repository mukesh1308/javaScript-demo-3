// JavaScript Objects

var ourDog={
    "name":"jimmy",
    "legs":4,
    "tails":1,
    "friends":["everyone"]
}

var name=ourDog.name;
var friends=ourDog.friends;
// // console.log(name+"\n"+friends);

var legs=ourDog["legs"];
var tails=ourDog["tails"];
// // console.log(legs+"\n"+tails);

var myDog={
    "name":"coder",
    "legs":4,
    "tails":2,
    "friends":["no-one"]
}
myDog.name="happy dog";
// // console.log(myDog);

myDog["bark"]="woof!..";
// // console.log(myDog);

delete myDog.bark;
// // console.log(myDog);

 function isThere(obj,property){
    if(obj.hasOwnProperty(property)){
        return true;
    }
    return false;
 }

 var isLage=isThere(myDog,"legs");
// //  console.log(isLage);

var isBark=isThere(myDog, "bark");
// // console.log(isBark);