//Write a function to generate random numbers and find if it’s prime or not.
function primeNumber(num){
    let temp=0;
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0)
        temp=1;
        break;
    }
    if(temp==0)
    console.log('prime number');
    else 
    console.log('not a prime number');
}
num=Math.floor(Math.random()*100);
console.log('number is'+num);
primeNumber(num);

