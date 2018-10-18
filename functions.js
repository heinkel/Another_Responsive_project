
function checkValidation1(){

	var field = document.getElementById("field3").value;
	var	regex = /^[A-Za-z]{3}$/;
	if (regex.test(field))
		document.getElementById("messageValidation").innerHTML = "  input accepted";
		
	else document.getElementById("messageValidation").innerHTML  = "  please use only three letters";


}

