var string=prompt("enter the string : ","string");
var letter=prompt("enter the letter", "letter");
string=string.split('');
var count=0;
for(let i=0;i<string.length;i++)
{
 if(letter==string[i])
 {
     count++;
 }
}
console.log("count=" + count);