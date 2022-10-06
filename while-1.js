var count=0;
var msg="<br>";
var val=0;
document.write("Program1 using while loop");
while(count<5)
{
    val = prompt("Enter the value "+(count+1)+":");
    msg=msg+"The value enterede is:"+val+"<br>";
    count++;
}
document.write(msg);

document.write("<br> <br> <br>")

