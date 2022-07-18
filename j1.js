//reverse string
function reverseString(str) {
    // if (str === "")
    //   return "";
    // else
    //   return reverseString(str.substr(1)) + str[0];
    let newStr='';
    for(let i=str.length-1;i>=0;i--){
      if(!(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'))
      newStr+=str[i];
    }
    return newStr;

  }
  console.log(reverseString("Gaurav mishra"));