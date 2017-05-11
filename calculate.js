//Kassari Anastasia
//3130088

const PREC = 12;
var initial_val = "", op = "", answer ="0";
var done = true, float_num = false, second_num = false, completed = false ;
var temp, display;

window.onload = function() {
	var elements = document.body.getElementsByTagName("*");
	for (var i =0; i < elements.length; i++) {
		switch (elements[i].id) {
			case "one": 
				elements[i].addEventListener("click", function(){ number("1"); });
				break;
			case "two": 
				elements[i].addEventListener("click", function(){ number("2"); });
				break;
			case "three": 
				elements[i].addEventListener("click", function(){ number("3"); });
				break;
			case "four": 
				elements[i].addEventListener("click", function(){ number("4"); });
				break;
			case "five": 
				elements[i].addEventListener("click", function(){ number("5"); });
				break;
			case "six": 
				elements[i].addEventListener("click", function(){ number("6"); });
				break;
			case "seven": 
				elements[i].addEventListener("click", function(){ number("7"); });
				break;
			case "eight": 
				elements[i].addEventListener("click", function(){ number("8"); });
				break;
			case "nine": 
				elements[i].addEventListener("click", function(){ number("9"); });
				break;
			case "zero": 
				elements[i].addEventListener("click", function(){ number("0"); });
				break;
				
			case "pi":
				elements[i].addEventListener("click", pi);
				break;
			case "e":
				elements[i].addEventListener("click", e);
				break;
			
			case "sin":
				elements[i].addEventListener("click", sin);
				break;
			case "cos":
				elements[i].addEventListener("click", cos);
				break;
			case "tan":
				elements[i].addEventListener("click", tan);
				break;
			
			case "log":
				elements[i].addEventListener("click", log);
				break;
			case "ln":
				elements[i].addEventListener("click", ln);
				break;
			case "power2":
				elements[i].addEventListener("click", power2);
				break;
			case "base10":
				elements[i].addEventListener("click", base10);
				break;
			case "exp":
				elements[i].addEventListener("click", exp);
				break;
			case "sqrt":
				elements[i].addEventListener("click", sqrt);
				break;
			case "factorial":
				elements[i].addEventListener("click", factorial);
				break;
			case "fraction":
				elements[i].addEventListener("click", fraction);
				break;
			
			case "percent":
				elements[i].addEventListener("click", percent);	
				break;
			case "add":
				elements[i].addEventListener("click", function(){ basic("+"); });
				break;
			case "sub":
				elements[i].addEventListener("click", function(){ basic("-"); });
				break;
			case "mul":
				elements[i].addEventListener("click", function(){ basic("*"); });
				break;
			case "div":
				elements[i].addEventListener("click", function(){ basic("/"); });
				break;
			case "powerY":
				elements[i].addEventListener("click", function(){ basic("^"); });
				break;
			
			case "diastole":
				elements[i].addEventListener("click", diastole);
				break;
			case "sign":
				elements[i].addEventListener("click", sign);
				break;
			case "equal":
				elements[i].addEventListener("click", equal);
				break;
			case "clear":
				elements[i].addEventListener("click", function() { reset("0");});
				break;
			case "delete":
				elements[i].addEventListener("click", del);
				break;
			case "answ":
				elements[i].addEventListener("click", answ);
				break;
			default:
				break;
		}
	}
	/*  */
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
	toExp();
}

// Number pi
function pi(){
	display = document.getElementById("result");
	display.value = Math.PI;
	completed = true;
	answer = display.value;
	toExp();
}

//Number e
function e(){
	display = document.getElementById("result");
	display.value = Math.E
	completed = true;;
	answer = display.value;
	toExp()
}

//Return answer
function answ() {
	display = document.getElementById("result");
	display.value = answer;
	completed = true;
	toExp();	
}

/*
 * One variable operations
 */

//Function sin(x)
function sin(){
	temp = document.getElementsByName("angle");
	if (temp[0].checked)
		answer *= Math.PI/180;
	if (temp[1].checked && answer == Math.PI)
		answer = 0;
	else { 
		if (answer == "")
			answer = Math.sin(0);
		else	
			answer = Math.sin(answer);
	}
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
	reset(answer);
}

//Function tan(x)
function tan(){
	temp = document.getElementsByName("angle");
	if (temp[0].checked)
		answer *= Math.PI/180;
	if (temp[1].checked && answer == Math.PI)
		answer = 0;
	else {
		if (answer == "")
			answer = Math.tan(0);
		else	
			answer = Math.tan(answer);
	}
	reset(answer);
}

//Function log(x)
function log() {
	display = document.getElementById("result");
	answer = Math.log(display.value) / Math.LN10;
	answer = (answer*1).toString();
	reset(answer);
}

//Function ln(x)
function ln() {
	display = document.getElementById("result");
	answer = Math.log(display.value);
	answer = (answer*1).toString();
	reset(answer);
}

//Function x^2
function power2() {
	display = document.getElementById("result");
	answer = Math.pow(display.value, 2);
	answer = (answer*1).toString();
	reset(answer);
}

//Function 10^x
function base10() {
	display = document.getElementById("result");
	answer = Math.pow(10, display.value);
	answer = (answer*1).toString();
	reset(answer);
}

//Function e^x
function exp() {
	display = document.getElementById("result");
	answer = Math.pow(Math.E, display.value);
	answer = (answer*1).toString();
	reset(answer);
}

//Function sqrt(x)
function sqrt() {
	display = document.getElementById("result");
	answer = Math.sqrt(display.value);
	answer = (answer*1).toString();
	reset(answer);
}

//Function 1/x
function fraction() {
	display = document.getElementById("result");
	answer = eval("1/"+display.value);
	answer = (answer*1).toString();
	reset(answer);
}

//Function x!
function factorial() {
	display = document.getElementById("result");
	answer = fact(display.value);
	if (answer == 0)
		answer = "Cannot calculate";
	else 
		answer = (answer*1).toString();
	reset(answer);
}

//Insert .
function diastole(){
	display = document.getElementById("result");
	temp = display.value;
	if (display.value.match(/[a-z]/i))
		display.value = "0";
	if (!float_num) {
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
		answer = eval(initial_val+"*"+display.value+"/100");
		answer = (answer*1).toString();
		display.value = answer;
		toExp();
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
	toExp();
}

//Delete last input
function del() {
	display = document.getElementById("result");
	if ((display.value.length <= 1) || display.value.match(/[a-z]/i)) {
		display.value = "0";
		float_num = false;
	}
	else  {
		if (display.value.substr(display.value.length-1) == ".")
			float_num = false;
		display.value = display.value.substr(0, display.value.length-1);		
	}
	answer = display.value;
	toExp();
}

//Reset display to val and all other properties to initial values
function reset(val) {
	//set display value
	document.getElementById("result").value = val;
	toExp();
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

//If display value is bigger than PREC digits, we make it in scientific notation
function toExp() {
	display = document.getElementById("result");
	if (display.value.length > PREC)
		display.value = (Number(display.value).toExponential(PREC)*1).toString();	
}

