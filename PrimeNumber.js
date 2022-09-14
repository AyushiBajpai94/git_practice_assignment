let num=11;
let temp=0;

for(let i=1;i<=num;i++)
{
   if(num%i==0) 
{
   temp++;
      }
}
if(temp==2){
 console.log("Prime Number");
}
else{
     console.log("Not a Prime Number");
    
}