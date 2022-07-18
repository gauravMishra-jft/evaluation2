//Write a code to find the third largest number in an array without sorting.
function thirdLargest(arr){
    let f=0,s=0,t=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>f){
            t=s;
            s=f;
            f=arr[i];
        }
        else if(arr[i]<f && arr[i]>s){
            t=s;
            s=arr[i];
        }
        else if(arr[i]<f && arr[i]<s && arr[i]>t){
            t=arr[i];
        }
    }
    console.log('third largest element',t);
}
let arr=[2,12,43,56,4,34,41,42,45,64,78,90];
thirdLargest(arr);