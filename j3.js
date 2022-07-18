/*Reverse each word in a string.
Input: ‘Hi my name is <Your Name>’
Output: ‘iH ym eman si <Your Name in Reverse>*/
// function wordReverse(str){
//     let arr=str.split('');
//     let output=[];
//     for(let t=arr.length-1;i>=0;i--)
//     {
//         output.push(arr[i]);
//     }
//     return output.join("");
// }
// let str='my name is gaurav mishra';
// let output=wordReverse(str);
// console.log(output);
function wordReverse(str){
    var words=str.split(' ');
    var result=[];
    for(var i=0;i<words.length;i++){
        result.push(words[i].split('').reverse().join(''));
    }
    return result.join(' ');
}
let str='hii my name is gaurav mishra';
let output=wordReverse(str);
console.log(output);