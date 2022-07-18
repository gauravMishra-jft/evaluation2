function swap(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    return [a,b];
}
let [a,b]=swap(2,3);
console.log(a,b);