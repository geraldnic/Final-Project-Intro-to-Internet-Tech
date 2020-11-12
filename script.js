function button() {
    document.getElementById("button").innerHTML = "";
    document.getElementById("counterprogram").innerHTML = "Counter Program";
    document.getElementById("randomhex").innerHTML = "Random Hex Color";
    document.getElementById("aboutme").innerHTML = "About Me";

  }

 function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var hasil = 0;

function plus(){
	hasil += 1
	warna();
}

function minus(){
	hasil -= 1
	warna();
	counterhome();
}

function warna(){
	if (hasil >= 0 && hasil <= 5){
		document.getElementById("result").innerHTML = hasil;
		document.querySelector(".result").style.backgroundColor = "#CACACA";
		document.querySelector(".result").style.transition = "1.5s";
	}

		else if (hasil > 5){
		document.getElementById("result").innerHTML = hasil;
		document.querySelector(".result").style.backgroundColor = "#79EA85";
		document.querySelector(".result").style.transition = "1.5s";
	}

		else if (hasil <0 && hasil >= -5){
		document.getElementById("result").innerHTML = hasil;
		document.querySelector(".result").style.backgroundColor = "#FFFB86";
		document.querySelector(".result").style.transition = "1.5s";
	}

		else if (hasil < -5){
		document.getElementById("result").innerHTML = hasil;
		document.querySelector(".result").style.backgroundColor = "#FC67FC";
		document.querySelector(".result").style.transition = "1.5s"; 
	}
}

function counterhome(){
	if (hasil <= -10){
		alert('back to home again!')
		document.getElementById("").innerHTML = window.location.href ='index.html';
	}

}

function changeColor(){
	hex = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
	document.querySelector(".color").style.backgroundColor = hex;
	document.querySelector(".color").style.transition = "1s";
	document.getElementById("hexa").innerHTML = hex;
	document.querySelector(".btnStyle").style.color = hex;
	document.querySelector(".color").style.transition = "1s";
}

function home(){
	document.getElementById("").innerHTML = window.location.href = 'index.html';
}

