function reversestring(stg)
{
var revarse="";
for(var i=0;i<stg.length;i++)
{
   var char=stg[i];
   revarse=char+revarse; 
}
return revarse;


}
var statement="hello vai how r you"
var ak=reversestring(statement);
console.log(ak);
var point=" i am anik k";
var to=reversestring(point);
console.log(to);