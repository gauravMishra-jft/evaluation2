//sum of array element
function sumarr(arr)
{var sum=0;
    var n=arr.length;
    for(i=0;i<n;i++)
    {sum=sum+arr[i];
    }
    return sum;
}
arr=[1,2,3,4,5,6];
console.log(sumarr(arr));