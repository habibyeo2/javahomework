var x = 1;
var y = 2;
function add(one,two){
    return one + two;
}
console.log(add(x,y))


var a = 1;
var b = 2;
var c = 3;
function add(one,two,three){
    return one + two + three;
}
console.log(add(a,b,c))


var a = 1;
var x = 2;
var b = 3;
var y = 4;
function add(one,two,three,four){
    return one + two + three + four;
}
console.log(add(a,x,b,y))


var car = {
    "name": "lambo",
    "front": "headlight",
    "back": "engine"
};

var burger = {
    "top": "bread",
    "middle": ["meat","tomatoes"],
    "bottom": "bread"
};

var phone = {
    "front": "screen",
    "middle": "power botton",
    "back": "battery"
};

var carName = car.name
console.log(carName);

var burgerTop = burger.top
console.log(burgerTop);

var phoneBack = phone.back
console.log(phoneBack)


var carBack = car["back"]
console.log(carBack);

var burgerBottom = buger["bottom"]
console.log(bugerButtom);

var phoneFront = phone["front"]
console.log(PhoneFront);


car = "V12";
buger = "buger king";
phone = "iphone";


car.name = "lamborghini";
buger.middle = "onions";
phone.back = "sticker";