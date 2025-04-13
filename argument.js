function addnumber(num1,num2)

{
    var sum=0;
    for(var i=0;i<arguments.length;i++){
    const num= arguments[i];
    
    
    sum=sum+num;

    }
return sum;
}
var result= addnumber(15,7,4,5,8);
console.log(result);
var kam= addnumber(45,54,65,65,45,4,5);
console.log('The num is :',kam);