console.log("Hi there! I dunno why you're seeing this, but welcome nonetheless!");
console.log("Yes, the code here is inefficient. Yes, I may edit this later.");

function open1() {
	document.getElementById("section2").style.display = "none";
	document.getElementById("section1").style.display = "block";
	document.getElementById("option1").disabled = true;
	document.getElementById("option2").disabled = false;
}

function open2() {
	document.getElementById("section2").style.display = "block";
	document.getElementById("section1").style.display = "none";
	document.getElementById("option1").disabled = false;
	document.getElementById("option2").disabled = true;
}
