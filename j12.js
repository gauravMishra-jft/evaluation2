// Write a program to find the occurrences of each number of an array of 20 elements.
let count={};
function arr_occurrences(arr)
{
    for(var i of arr)
    {if(count[i]){
        count[i]+=1;
    }
    else{
        count[i]=1;
    }

    }
    console.log(count);
}
arr=[1,3,2,4,5,2,1,5,4];
arr_occurrences(arr);