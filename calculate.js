//Kassari Anastasia
//3130088

const PREC = 10;
var initial_val = "", op = "", answer ="0";
var done = true, float_num = false, second_num = false, completed = false ;
var temp, display;

window.onload = function() {
	document.getElementById("one").addEventListener("click", function(){ number("1"); });
	document.getElementById("two").addEventListener("click", function(){ number("2"); });
	document.getElementById("three").addEventListener("click", function(){ number("3"); });
	document.getElementById("four").addEventListener("click", function(){ number("4"); });
	document.getElementById("five").addEventListener("click", function(){ number("5"); });
	document.getElementById("six").addEventListener("click", function(){ number("6"); });
	document.getElementById("seven").addEventListener("click", function(){ number("7"); });
	document.getElementById("eight").addEventListener("click", function(){ number("8"); });
	document.getElementById("nine").addEventListener("click", function(){ number("9"); });
	document.getElementById("zero").addEventListener("click", function(){ number("0"); });
	
	document.getElementById("pi").addEventListener("click", pi);
	document.getElementById("e").addEventListener("click", e);
	
	document.getElementById("sin").addEventListener("click", sin);
	document.getElementById("cos").addEventListener("click", cos);
	document.getElementById("tan").addEventListener("click", tan);
	
	document.getElementById("log").addEventListener("click", log);
	document.getElementById("ln").addEventListener("click", ln);
	document.getElementById("power2").addEventListener("click", power2);
	document.getElementById("base10").addEventListener("click", base10);
	document.getElementById("exp").addEventListener("click", exp);
	document.getElementById("sqrt").addEventListener("click", sqrt);
	document.getElementById("factorial").addEventListener("click", factorial);
	document.getElementById("fraction").addEventListener("click", fraction);
	
	document.getElementById("percent").addEventListener("click", percent);	
	document.getElementById("add").addEventListener("click", function(){ basic("+"); });
	document.getElementById("sub").addEventListener("click", function(){ basic("-"); });
	document.getElementById("mul").addEventListener("click", function(){ basic("*"); });
	document.getElementById("div").addEventListener("click", function(){ basic("/"); });
	document.getElementById("powerY").addEventListener("click", function(){ basic("^"); });
	
	document.getElementById("diastole").addEventListener("click", diastole);
	document.getElementById("sign").addEventListener("click", sign);
	document.getElementById("equal").addEventListener("click", equal);
	document.getElementById("clear").addEventListener("click", function() { reset("0");});
	document.getElementById("delete").addEventListener("click", del);
	document.getElementById("answ").addEventListener("click", answ);
}

function number(input){
	display = document.getElementById("result");
	temp = display.value;
	
	if (display.value.match(/[a-z]/i))
		display.value = "0";
	
	if (second_num) {
		display.value = "0";
		second_num = false;
	}
	
	if (display.value == "0")
		temp = input;
	else {
		if (temp.length < PREC)
			temp += input;
	}
	display.value = temp;
	completed = true;
}

// Number pi
function pi(){
	display = document.getElementById("result");
	display.value = Math.PI.toPrecision(PREC);
	completed = true;
	answer = display.value;
}

//Number e
function e(){
	display = document.getElementById("result");
	display.value = Math.E.toPrecision(PREC);
	completed = true;
	answer = display.value;
}

//Return answer
function answ() {
	display = document.getElementById("result");
	display.value = answer;
	completed = true;	
}

/*
 * One variable operations
 */

//Function sin(x)
function sin(){
	temp = document.getElementsByName("angle");
	if (temp[0].checked)
		answer *= Math.PI/180;
	if (answer == "")
		answer = Math.sin(0);
	else	
		answer = Math.sin(answer);
	answer = answer.toPrecision(PREC);
	reset(answer);
}

//Function cos(x)
function cos(){
	temp = document.getElementsByName("angle");
	if (temp[0].checked)
		answer *= Math.PI/180;
	if (answer == "")
		answer = Math.cos(0);
	else	
		answer = Math.cos(answer);
	answer = answer.toPrecision(PREC);
	reset(answer);
}

//Function tan(x)
function tan(){
	temp = document.getElementsByName("angle");
	if (temp[0].checked)
		answer *= Math.PI/180;
	if (answer == "")
		answer = Math.tan(0);
	else	
		answer = Math.tan(answer);
	answer = answer.toPrecision(PREC);
	reset(answer);
}

//Function log(x)
function log() {
	display = document.getElementById("result");
	temp = Math.log(display.value) / Math.LN10;
	if (temp === parseInt(temp, 10))
		answer = (temp*1).toString();
	else
		answer = (temp.toPrecision(PREC)*1).toString();
	reset(answer);
}

//Function ln(x)
function ln() {
	display = document.getElementById("result");
	temp = Math.log(display.value);
	if (temp === parseInt(temp, 10))
		answer = (temp*1).toString();
	else
		answer = (temp.toPrecision(PREC)*1).toString();
	reset(answer);
}

//Function x^2
function power2() {
	display = document.getElementById("result");
	temp = Math.pow(display.value, 2);
	if ((temp === parseInt(temp, 10)) && (temp.toString().length <= (PREC+2) ))
		answer = (temp*1).toString();
	else
		answer = (temp.toPrecision(PREC)*1).toString();
	reset(answer);
}

//Function 10^x
function base10() {
	display = document.getElementById("result");
	temp = Math.pow(10, display.value);
	if ((temp === parseInt(temp, 10)) && (temp.toString().length <= (PREC+2) ))
		answer = (temp*1).toString();
	else
		answer = (temp.toPrecision(PREC)*1).toString();
	reset(answer);
}

//Function e^x
function exp() {
	display = document.getElementById("result");
	temp = Math.pow(Math.E, display.value);
	if ((temp === parseInt(temp, 10)) && (temp.toString().length <= (PREC+2) ))
		answer = (temp*1).toString();
	else
		answer = (temp.toPrecision(PREC)*1).toString();
	reset(answer);
}

//Function sqrt(x)
function sqrt() {
	display = document.getElementById("result");
	temp = Math.sqrt(display.value);
	if ((temp === parseInt(temp, 10)) && (temp.toString().length <= (PREC+2) ))
		answer = (temp*1).toString();
	else
		answer = (temp.toPrecision(PREC)*1).toString();
	reset(answer);
}

//Function 1/x
function fraction() {
	display = document.getElementById("result");
	temp = eval("1/"+display.value);
	if ((temp === parseInt(temp, 10)) && (temp.toString().length <= (PREC+2) ))
		answer = (temp*1).toString();
	else
		answer = (temp.toPrecision(PREC)*1).toString();
	reset(answer);
}

//Function x!
function factorial() {
	display = document.getElementById("result");
	temp = fact(display.value);
	if (temp == 0)
		answer = "Cannot calculate";
	else if ((temp === parseInt(temp, 10)) && (temp.toString().length <= (PREC+2) ))
		answer = (temp*1).toString();
	else
		answer = (temp.toPrecision(PREC)*1).toString();
	reset(answer);
}

//Insert .
function diastole(){
	display = document.getElementById("result");
	temp = display.value;
	if (display.value.match(/[a-z]/i))
		display.value = "0";
	if (!float_num) {
		if (temp.length < PREC-2)
			temp += ".";
		display.value = temp;
		completed = false;
		float_num = true;
	}
	
}

//Basic operations: +, -, *, /, ^
function basic(operator){	
	display = document.getElementById("result");
	if (op == "") {
		initial_val = display.value;
		op = operator;
	}
	else {
		if (completed) {
			equal();
			initial_val = answer;
			op = operator;
		}
		else
			op = operator;
	}
	completed = false;
	second_num = true;
}

//Find result =
function equal(){
	display = document.getElementById("result");
	if (completed && op!="") {
		if (op =="^")
			answer = Math.pow(initial_val, display.value);
		else {
			console.log(initial_val + op + display.value);
			answer = eval(initial_val + op + display.value);
			console.log(answer);
		}
		reset(answer);
	}
}

//Percent
function percent(){
	display = document.getElementById("result");
	if (op != "") {
		temp = eval(initial_val+"*"+display.value+"/100");
		if (temp === parseInt(temp, 10))
			answer = (temp*1).toString();
		else
			answer = (temp.toPrecision(PREC)*1).toString();
		display.value = answer;
	}
	
}

//Add/remove -
function sign(){
	display = document.getElementById("result");
	if (display.value != "0") {
		if (display.value[0] == "-")
			display.value = display.value.substr(1, display.value.length);
		else
			display.value = "-" + display.value; 
	}
	answer = display.value;
}

//Delete last input
function del() {
	display = document.getElementById("result");
	if ((display.value.length <= 1) || display.value.match(/[a-z]/i))
		display.value = "0";
	else 
		display.value = display.value.substr(0, display.value.length-1);
	answer = display.value;	
}

//Reset display to val and all other properties to initial values
function reset(val) {
	//set display value
	document.getElementById("result").value = val;
	//reset all properties
	initial_val = "";
	op = "";
	float_num = false;
	second_num = false;
	completed = false;
}

//Compute factorial of n (n = integer)
function fact(n) {
	if (n.toString().indexOf(".") != -1) {
		console.log("Cannot calculate factorial for float numbers!");
		return 0;
	}
	else {
		try {
			if (n == 0)
				return 1;
			else
				return n*fact(n-1);
		}
		catch (err) {
			console.log("Cannot calculate factorial for big numbers!")
			reset("NaN");
		}
	}
}

