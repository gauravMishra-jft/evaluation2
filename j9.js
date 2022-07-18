//Write logic to swap values of two variables without using a third variable.
function swap(a,b)
{
    a=a+b;
    b=a-b;
    a=a-b;
    console.log('value of a is'+a,'value of b is'+b);
}
swap(2,3);