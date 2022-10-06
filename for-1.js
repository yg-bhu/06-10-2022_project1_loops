var count=0;
var msg="<br>";
var val=0;
document.write("<br> <br> <br>")
document.write("Program1 using For loop");
for(count=0;count<5;count++)
{
    val = prompt("Enter the value "+(count+1)+":");
    msg=msg+"The value entered is:"+val+"<br>";
}
document.write(msg);
document.write("<br> <br> <br>")