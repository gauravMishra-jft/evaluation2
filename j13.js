//Write a program to remove duplicate values from an array of integers.
// function uniqueElement(arr)
// {
//     let s=new Set(arr);
//     return s;
// }
// arr=[1,2,1,'s','d','s'];
// let s=uniqueElement(arr);
// console.log(s);
//            ---------------------------------------------------------
let arr=[1,2,3,1,2,'a','b','a'];
let l=[];
arr.forEach((c) =>{
    if(!l.includes(c)){
        l.push(c);
    }
});
console.log(l);
