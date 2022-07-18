function reverseNumber(num){
    let rev=0;
    while(num>0){
        rev=rev*10+num%10;
        num=Math.floor(num/10);
    }
    return rev;
}
function isPalindrome(n){
    let temp=reverseNumber(n);
    if(temp==n)
    return 1;
    else
    return 0;
}
let n=105;
console.log(isPalindrome(n)==1?'true':'false');