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


//while loop

var arr=[];
var itx=0;
while(itx<10){
    arr.push(itx);
    itx++;
}

// // console.log(arr);

// for loop

var forArr=[];

for(let i=0;i<10;i++){
    forArr.push(i);
}

// // console.log(forArr);

var evenArr=[];

for(let i=0;i<20;i+=2){
    evenArr.push(i);
}
// // console.log(evenArr);

for(let i=0;i<evenArr.length;i++){
    // // console.log(evenArr[i]);
}

var twoDArr=[[1,9],[8,3],[2,2]];
console.log("hi");
for(let i=0;i<twoDArr.length;i++){
    for(let j=0;j<twoDArr[i].length;j++){
        // // console.log(twoDArr[i][j]);
    }
}