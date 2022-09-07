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
for(let i=0;i<twoDArr.length;i++){
    for(let j=0;j<twoDArr[i].length;j++){
        // // console.log(twoDArr[i][j]);
    }
}

// do while loop

var Arr=[];
var i=0;
do{
    Arr.push(i);
    i++;
}while(i>0 && i<10);

// // console.log(Arr);

//random function

var randomFraction=Math.random();
// // console.log(randomFraction);

//generateing random number between 0 and 6

var RandNum=Math.floor(Math.random()*6);
// // console.log(RandNum);

// parseInt function

function stringToInt(str){
    return parseInt(str);
}
var num=stringToInt("54");
// // console.log(typeof(num));

function binToInt(str){
    return parseInt(str,2);
}
// // console.log(binToInt("10011"));


//ternary opurator

function large(a,b,c){
    return a>b? a>c? a:c : b>c? b:c;
}

var large=large(2,10,7);
// // console.log(large);