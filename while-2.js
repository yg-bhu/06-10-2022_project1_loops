var count=0;
var val=0, total=0;
document.write("Program2 using while loop <br>");
while(count<5)
{
    val = prompt(" Enter the marks for  Subject"+(count+1)+":");
    total=total+parseInt(val);
    count++;
}
document.write("The Total marks obtained are: "+total);