function add()
{
  var num1=parseInt(document.getElementById('a').value);
  var num2=parseInt(document.getElementById('b').value);
  var result=num1+num2
  document.getElementById('p1').innerHTML="Result is:"+result;
}
function sub()
{
  var num1=parseInt(document.getElementById('a').value);
  var num2=parseInt(document.getElementById('b').value);
  var result=num1-num2
  document.getElementById('p1').innerHTML="Result is:"+result;
}
function mul()
{
  var num1=parseInt(document.getElementById('a').value);
  var num2=parseInt(document.getElementById('b').value);
  var result=num1*num2
  document.getElementById('p1').innerHTML="Result is:"+result;
}
function div()
{
  var num1=parseInt(document.getElementById('a').value);
  var num2=parseInt(document.getElementById('b').value);
  var result=num1/num2
  document.getElementById('p1').innerHTML="Result is:"+result;
}
