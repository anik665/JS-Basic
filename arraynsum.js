function arraysum(number){
    var sum=0;






    for(var i=0; i< number.length  ;i++)
    {
        var element=number[i];
        sum =sum+element;
    }
    return sum;
}
var number=[45,5,45,78,65,98,78,45,69];
var total= arraysum (number);
console.log(total) ;