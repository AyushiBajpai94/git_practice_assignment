
let str="MAAM";
let bag="";
for(let i=str.length-1;i>=0;i--)
{
    bag=bag+str[i]
   }
if(bag==str)
{
console.log("String is Palindrome");
}
else{
console.log("string is not Palindrome");
}