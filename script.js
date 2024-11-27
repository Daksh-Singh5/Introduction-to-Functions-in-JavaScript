function showtext()
{
    document.getElementById("para1").innerHTML="hello guys how are u doing";
    document.getElementById("body1").style.backgroundColor="orange";
}
function hidetext()
{
    document.getElementById("para1").innerHTML="";
    document.getElementById("para2").innerHTML="";
    document.getElementById("body1").style.backgroundColor="white";
}
function add(x,y)
{
    var solution=x+y;
    document.getElementById("para2").innerHTML=solution;
    document.getElementById("body1").style.backgroundColor="cyan";
}

function calculate() {
    var getvalue = document.getElementById("number1").value;
    var getvalue2 = document.getElementById("number2").value;

    var result = Number(getvalue) + Number(getvalue2);

    document.write("<br>"+"Your answer is: " + result);
}
