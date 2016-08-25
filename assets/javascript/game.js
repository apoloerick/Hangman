	//Variables
	var wordoptions = ["apricot", "number", "vacant", "crocodile", "gutter", "gorgeous", "photograph", "hybrid", "lavender"];
	var selectedword = "";
	var lettersinword =[];
	var numblanks = 0;
	var blanksandsuccesses = [];
	var wrongletters = [];

	var wincount = 0;
	var losscount = 0;
	var guessesleft = 9;

	//functions
	 function startgame(){
 	selectedword= wordoptions[Math.floor(Math.random()* wordoptions.length)];
 	lettersinword = selectedword.split("");
 	numblanks = lettersinword.length;

 	//reset
 	guessesleft= 9;
 	wrongletters=[];
 	blanksandsuccesses =[];


 	//blanks and rights

 	for(var i=0; i<numblanks; i++){
 		blanksandsuccesses.push("_");
 	}

 	//html interaction
 	document.getElementById("wordtoguess").innerHTML = blanksandsuccesses.join(" ");
 	document.getElementById("numguesses").innerHTML = guessesleft;
 	document.getElementById("losscounter").innerHTML = losscount;
 	document.getElementById("wincounter").innerHTML = wincount;
 	//logs
 	console.log(selectedword);
 	console.log(lettersinword);
 	console.log(numblanks);
 	console.log(blanksandsuccesses);
 }
startgame();
 function checkletters(letter) {
 	//check letters in code
 
 	var isletter = false;
	for (var i=0; i<numblanks; i++) {
 		if(selectedword[i] == letter) {
 			isletter = true;
 			
 		}
 	}

 		//existence of letter
 		if (isletter){

 		for (var i=0; i<numblanks; i++) {
 			if(selectedword[i] == letter) {
 				blanksandsuccesses[i] = letter;
 			}
 		}
 	}
 		
 		else {
 			wrongletters.push(letter);
 			guessesleft--
 		}
 		console.log(blanksandsuccesses);
}
	 
	 	function replay(){
	 		console.log("win count: " + wincount +" | loss count: " + losscount + "| guesses left: "+ guessesleft )
	 	
			


	 	//update html
	 	document.getElementById("numguesses").innerHTML = guessesleft;
	 	document.getElementById("wordtoguess").innerHTML = blanksandsuccesses.toString(" ");

 //check user 1 won 
			 if (lettersinword.toString() == blanksandsuccesses.toString()){
			 	wincount++;
			 	//alert("winner!");

	 
		document.getElementById("wincounter").innerHTML = wincount
	 	
	 	startgame();
	 }

	 //check if user 2 lost

	 else if (guessesleft == 0) {
	 	losscount++;
	 	alert("you lost!");
	 	document.getElementById("losscounter").innerHTML = losscount;

	 	startgame();
	 }

	//main process
	//starting point
	//startgame();
}
	//clicks

	document.onkeypress = function (event) {
		var letterguessed = String.fromCharCode(event.keycode).toLowerCase();


		checkletters(letterguessed);
		replay();

		console.log(letterguessed)
		//startgame();
	}
