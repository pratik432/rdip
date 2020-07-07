//calculator

function d(val)
{
document.getElementById("screen").value+=val
 }

function solv()
{

 let x = document.getElementById("screen").value
 let y = eval(x)
 document.getElementById("screen").value = y
}

function clr()
{
document.getElementById("screen").value = ""
}

function absolute()
{
	let x = document.getElementById("screen").value
	let y = math.abs(x)
	document.getElementById("screen").value =y
}

function squareroot()
{
	let x = document.getElementById("screen").value
	let y = math.sqrt(x)
	document.getElementById("screen").value = y
}

// // // FORM VALIDATION

function validateform(){

	var name = document.form2.name1.value;
	var num =  /^[0-9]+$/;

	
	
	
	if(name.length<1)
	{
		document.getElementById("error").innerHTML = "name can't be empty";
		return false;
	}
	 else if(name.match(num))
	{
		document.getElementById("error").innerHTML = "name cant start with number";
		return false;
	}

	
	
}


function validatefor(){

	var numb= document.form2.phno.value;
   
	var num =  /^[A-Za-z]+$/;
	
	
	if(numb.length<1)
	{
		document.getElementById("error1").innerHTML = "number can't be empty";
		return false;
	}
	else if(numb.match(num))
	{
		document.getElementById("error1").innerHTML = "Number should have no alphabets";
		return false;
	}

	else if(numb.toString().length!=10)
	{
		document.getElementById("error1").innerHTML = "Number should be of 10 digits";
		return false;

	}
	
}


function validatefo(){

	var ename = document.form2.email.value;
	
	var num = /^\S+@\S+\.\S+$/
	
	if(ename.length<1)
	{
		document.getElementById("error2").innerHTML = "email can't be empty";
		return false;
	}
	else if(ename.match(num))
	{
		document.getElementById("error2").innerHTML = "email must contain @ and dot.";
		return false;
	}


}

//pallindrome

function Palindrome() {
var string1 = "";
var str = document.getElementById("str").value;
var i = str.length;
for(var j=i; j>=0; j--) {
string1 = string1+str.charAt(j);
}
if(str == string1) {
alert(str+" -is Palindrome");
} else {
alert(str+" -is not a Palindrome");
}
}

//who will survive

function  number(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;

}

function final(){

	var x = number(1,1000)%10; 
	var y = number(1,1000)%10;
	alert("random number 1 is "+x);
	alert("random number 2 is "+y);
	
	
//human vs cockroach
	if((x==0||x==3||x==9||x==6 )&& (y==1||y==4||y==7)){

		alert("human wins(human v/s cockroach)")
	}
	else if(y==1||y==4||y==7 && x==2||x==8||x==5){

		alert("cockroach win (cockroach v/s nuclear bomb)")
	}

	else if (x==0||x==3||x==9||x==6 && y==2||y==8||y==5){

		alert("human dies (human v/s nuclear bomb )")
	}
	else if (x == y){

		alert("TIE")

	}

	
}