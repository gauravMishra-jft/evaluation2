//Find the next palindrome number after 1991.
function isPalindrome(num)
{
    let n,k,rev=0;
    n=num;
    while(num!=0){
        k=num % 10;
        rev=(rev * 10) + k;
        num=Math.floor(num/10);
    }
    if(n==rev)
    return 1;
    else
    return 0;
}
let num=1992;

while (isPalindrome(num) == 0){
    num = num+1;
}
console.log("next palindrome:",num);
