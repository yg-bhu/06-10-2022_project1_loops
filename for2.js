var count=0;
var val=0, total=0;
document.write("Program2 using while loop <br>");
for(count=0;count<5;count++)
{
    val = prompt(" Enter the marks for  Subject"+(count+1)+":");
    total=total+parseInt(val);
}
document.write("The Total marks obtained are: "+total);