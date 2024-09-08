// 1. take one variable and assign with some time (4/13/17/24)
//    if the time is less than 24hrs then-->print able to delete the message for me and everyone
//    if the time is greater then 24 hrs then--> print able to delete message for me only.
//    implement this using terinary operator

let time = 13;
let result = time<=24 ? 'Able to delete the message for me and everyone' : 'Able to delete the message for me only';
console.log(result)

// Output : 
// Able to delete the message for me and everyone


// 2. Find the largest number among three numbers using terinary operator.

let a = 11;
let b = 9;
let c = 10;
let res = a>b && a>c ? `${a} is largest number among three numbers` : b>c ? `${b} is largest number among three numbers` : `${c} is largest number among three numbers` ; 
console.log(res)

// Output : 
// 11 is largest number among three numbers


