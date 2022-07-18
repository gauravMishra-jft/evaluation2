/*In an array of 100 elements, 1 to 100 are stored but 0 is stored for one 
random number. Write a program to find
the missing number.*/
let arr=[1,2,3,4,5,6,0,8,9,10];
let n=10;
let sum=(n*(n+1))/2;
let s=0;
for(let i in arr){
s=s+arr[i];
}
let missing_number=sum-s;
console.log(missing_number);


