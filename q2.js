// // console.log("" || "foo" || false)

// // console.log(+"1")


// // console.log(!1)
// // console.log(!"")
// // console.log(!false)
// // console.log(!NaN)
// // console.log(!undefined)
// // console.log(!null)


// // console.log(!1)

// // console.log(!!0)
// // console.log(!!'')
// // console.log(!!false)
// // console.log(!!NaN)
// // console.log(!!undefined)
// // console.log(!!null)



// var time=5;
var name=require("readline-sync")
time=name.questionInt("Enter the number : ")
if(time >1 && time <11){
    console.log("good morning");
}
else if(time >11 && time <15){
    console.log("good afternoon");
}
else if(time ){
    console.log("good")
}
else{
    console.log("good night");
}


// const k="alpana";
// letter=k[0]
// console.log(letter)

// const number=6;
// console.log(typeof (number));

// var a=5+'a';
// console.log(a)

// var a=5*'d'+2;
// console.log(a)

// var b=4
// var a=b
// console.log(b*a+"c")

var a='24';
var b=9;
console.log(a+b)