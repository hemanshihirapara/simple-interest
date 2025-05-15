
//no argu , no return
//value in fun , print in fun
function si1()
{
    var principal=1000;
    var rate=5;
    var time=3;
     var ans1 = (principal*rate*time)/100;
     document.write(ans1);
}
 //argu , return
// value out fun, print out fun
function si2(p,r,t)
{
    ans2= (p*r*t)/100;
    return ans2;
}    
//no argu , return
// value in fun, print out fun
function si3()
{
    var p3=3000;
    var r3=5;
    var t3=3;
    var ans3= (p3*r3*t3)/100;
    return ans3; 
}
//argu , no return
//value out fun , print in fun
function si4(p4,r4,t4)
{
    var ans4=(p4*r4*t4)/100;
    document.write("<br><br>interest 4 : ",ans4);   
}    