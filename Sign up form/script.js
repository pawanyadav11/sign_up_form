//start firstname validation
function fname_val()
{
	var fname = document.getElementById("firstname").value;
	var input = document.getElementById("firstname");
	var check = document. getElementById("tick");
	fname == "" ? input.setAttribute("value", "This field is empty"): 
	check.style.display = "inline";
	fname == "" ? input.setAttribute("class", "animated infinite bounce"): 
	check.style.display = "inline";
	fname == "" ? input.style.color = "red" : check.style.display = "inline";
    fname == "" ? input.style.border = "1px solid red" : check.style.display = "inline";
 
}

function fname_val_close()
{
	var fname = document.getElementById("firstname").value;
	var input = document.getElementById("firstname");
	fname == "This field is empty" ? input.setAttribute("value", "") :
	check.style.display = "inline";
	fname == "This field is empty" ? input.setAttribute("class", "") :
	check.style.display = "inline";
	fname == "This field is empty" ? input.style.color = "black" :
	check.style.display = "inline";
	fname == "This field is empty" ? input.style.border = "1px solid #ccc" :
	check.style.display = "inline";
}
//end firstname validation

//start lastname validation
function lname_val()
{
	var lname = document.getElementById("lastname").value;
	var input = document.getElementById("lastname");
	var check = document. getElementById("lcheck");
	lname == "" ? input.setAttribute("value", "This field is empty"): 
	check.style.display = "inline";
	lname == "" ? input.setAttribute("class", "animated infinite bounce"): 
	check.style.display = "inline";
	lname == "" ? input.style.color = "red" : check.style.display = "inline";
    lname == "" ? input.style.border = "1px solid red" : check.style.display = "inline";
}


function lname_val_close()
{
	var lname = document.getElementById("lastname").value;
	var input = document.getElementById("lastname");
	lname == "This field is empty" ? input.setAttribute("value", "") :
	check.style.display = "inline";
	lname == "This field is empty" ? input.setAttribute("class", "") :
	check.style.display = "inline";
	lname == "This field is empty" ? input.style.color = "black" :
	check.style.display = "inline";
	lname == "This field is empty" ? input.style.border = "1px solid #ccc" :
	check.style.display = "inline";
}
//end lastname validation

//start mobile validation
function mobile_val() {
  var mobile = document.getElementById("mobile").value;
  var input = document.getElementById("mobile");
  var check = document.getElementById("mcheck");
  var check_digit_length = mobile == "" ? input.setAttribute("value", "This field is empty") : mobile;
  var check_digit_style = mobile == "" ? input.setAttribute("style", "color:red;border:solid red") : mobile;
  var check_digit_class = mobile == "" ? input.setAttribute("class", "animated infinite bounce") : mobile;
  var digit_check = check_digit_length.length == 10 ? check_digit_length : window.alert("Enter 10 digit number");
  digit_check.charAt(0) == 9 || digit_check.charAt(0) == 8 || digit_check.charAt(0) == 7 ? check.style.display = "inline" : window.alert("Enter Indian number only");
}

function mobile_stop_val()
{
	var input = document.getElementById("mobile");
	input.setAttribute("value", "");
	input.setAttribute("style","color:black;border:1px solid #ccc");
	input.setAttribute("class", "");
	
}

//end mobile validation

//start remobile validation
function remobile_val()
{
	var mobile = document.getElementById("mobile").value;
	var remobile = document.getElementById("remobile").value;
	var retick = document.getElementById("retick");
	var input = document.getElementById("remobile");
	var check = remobile == "" ? input.value = "Empty field" : remobile;
	check == mobile ? retick.style.display = "inline" : 
	input.value = "Not matched with mobile number";
}

//end remoblie validation

//start usename validation
function uname_val()
{
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
	var uname = document.getElementById("username");
	uname.setAttribute("value", fname+lname);
	uname.setAttribute("disabled", "disabled");
}

//end username validation

//start password validation

function pass_val()
{
	var pwd = document.getElementById("password").value;
	var input = document.getElementById("password");
	var check = document.getElementById("pcheck");
	var upper = /[A-Z]/g;
	var lower = /[a-z]/g;
	var num = /[0-9]/g;
	var alpha = /[~|`|!|@|#|$|%|^|&|*|(|_|-|+|=]/g;
	var check_upper = pwd == "" ? input.value = "Empty field" : pwd
	var check_lower = check_upper.charAt(0).match(upper) ? 
	check_upper : window.alert("First letter should be capital");
	var number = check_lower.match(lower) ? check_lower : 
	window.alert("use alteast one small letter");
	var check_alpha = number.match(num) ? number : 
	window.alert("use alteast one number");
	var check_lenght = check_alpha.match(alpha) ? check_alpha :
	window.alert("use atleast one alpha numeric character");
	check_alpha.length >6 ? check.style.display = "inline" :
	window.alert("weak password type atleast 6 digit password");
}

//end password validation

//start email validation

function email_val()
{
	var email = document.getElementById("email").value;
	var hint = document.getElementById("email_hint");
	var check = document.getElementById("echeck");
	email.match('@') ? hint.style.display = "inline" :
	hint.style.display = "none";
	email.match("gmail.com") ? hint.style.display = "none" :
	email;
	email.match("yahoomail.com") ? hint.style.display = "none" :
	email;
	
}

function gmail()
{
	var email = document.getElementById("email").value;
	var input = document.getElementById("email");
	input.value = email+"gmail.com";
	var hint = document.getElementById("email_hint");
	hint.style.display = "none";
	
}

function yahoo()
{
	var email = document.getElementById("email").value;
	var input = document.getElementById("email");
	input.value = email+"yahoomail.com";
	var hint = document.getElementById("email_hint");
	hint.style.display = "none";
}
//end email validation

//start submit validation
function submit_val()
{
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
	var mobile = document.getElementById("mobile").value;
	var remoblie = document.getElementById("remobile").value;
	var email = document.getElementById("email").value;
	var uname = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	var btn = document.getElementById("submit");
	fname,lname,mobile,remobile,email,pass = "" ?
	btn.disabled = true : btn.disabled = false;
	
	fname,lname,mobile,remobile,email,pass = "" ?
	btn.disabled = true : btn.style.backgroundColor = "red";
	
	fname,lname,mobile,remobile,email,pass = "" ?
	btn.disabled = true : btn.style.cursor = "pointer";
}
//end submit validation
