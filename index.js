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

//anonymous and fat arrow function

const nameMe=function(){
    return "my name is mukesh kumar"
}

var myName=nameMe();
// // console.log(myName);

// const age=()=>{
//     return "my age is 19"
// }
// var myAge=age();

const age=()=>"my age is 19";
// // console.log(myAge);

// object destructuring

const Objects={x:5,y:10,z:15};

var {x:a,y:b,z:c}=Objects;

// // console.log(a+" "+b+" "+c);

const avgTemp={today:77.5,tomorrow:79};

function getTemp(avg){
    var {today : todayTem}=avg;
    return todayTem;
}

// // console.log(getTemp(avgTemp));

const temp={
    today : {max:83 ,min:72},
    tomorrow : {max:84.6,min:73.3}
};

function getMaxTemp(Temp){
    const {today : {max : m}}=Temp;
    return m;
}

// // console.log(getMaxTemp(temp));

const [x,y,,z]=[1,2,3,4,6,7,8];

// // console.log(x+" "+y+" "+z);

const list=[1,2,3,4,5,6,,7,8,9];

function removeTwo(list){
    var [ , , ...arr]=list;
    return arr;
}

var after=removeTwo(list);
// // console.log("before :"+list);
// // console.log("after :"+after);

//Template literal

var num2=15;

var nameNum=`the number is ${num2}`;

// // console.log(nameNum);

// challenge

const result={
    success:["max-length","no-amd","prefer-arrow-functions"],
    failure:["no-var","var-on-top","linebreak"],
    skipped:["id-blacklist","no-dup-keys"]
};

function makeList(arr){
    var newArr=arr.map((ele)=>{return `<li class="text-warning">${ele}<li>`});
    return newArr;
}

// // console.log(makeList(result.failure));

// class

class SpaceShuttle{
    constructor(t){
        this.targetplanet =t;
    }
}
var zeus=new SpaceShuttle("jupiter");

// // console.log(zeus);

function makeClass(){
    class vegetable{
        constructor(n){
            this.name=n;
        }
    }
    return vegetable;
}
const Vegetable=makeClass();
const tomato=new Vegetable("tomato");
// // console.log(tomato);

class book{
    constructor(n){
        this.aurtor=n;
    }
    get write(){
        return this.aurtor;
    }
    set write(n){
        this.aurtor=n;
    }
}
const B=new book("my book");
console.log(B);