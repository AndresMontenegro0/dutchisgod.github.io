//couldnt figure out how to send prompt message to player 1x and player 2 y field
//prompt("P1 Enter Your Name You Will be x");
//prompt("P2 Enter Your Name You Will be o")

var player = 1;
function clickBt(bt){
if(player == 1){
//accepts x entries until o's turn
	document.getElementById(bt).value = "x";
	document.getElementById(bt).disabled = "null";
	player -= 1;
	winner();
//accepts O entries until x's turn
}else {
	document.getElementById(bt).value = "o";
	document.getElementById(bt).disabled = "null";
	player += 1;
	winner();
}
}
//None of this is DRY brute force method of verifying x wins
function winner(){
	if(
		document.getElementById("bt1").value == "x" &&
		document.getElementById("bt2").value == "x" &&
		document.getElementById("bt3").value == "x" ||
		document.getElementById("bt4").value == "x" &&
		document.getElementById("bt5").value == "x" &&
		document.getElementById("bt6").value == "x" ||
		document.getElementById("bt7").value == "x" &&
		document.getElementById("bt8").value == "x" &&
		document.getElementById("bt9").value == "x" ||
		document.getElementById("bt1").value == "x" &&
		document.getElementById("bt4").value == "x" &&
		document.getElementById("bt7").value == "x" ||
		document.getElementById("bt2").value == "x" &&
		document.getElementById("bt5").value == "x" &&
		document.getElementById("bt8").value == "x" ||
		document.getElementById("bt3").value == "x" &&
		document.getElementById("bt6").value == "x" &&
		document.getElementById("bt9").value == "x" ||
		document.getElementById("bt1").value == "x" &&
		document.getElementById("bt5").value == "x" &&
		document.getElementById("bt9").value == "x" ||
		document.getElementById("bt3").value == "x" &&
		document.getElementById("bt5").value == "x" &&
		document.getElementById("bt7").value == "x"
){
		alert("X Player Wins!");
		

	}else if(
		//when you dont know how to make a proper array .
		//you brute force your way through it.
		document.getElementById("bt1").value == "o" &&
		document.getElementById("bt2").value == "o" &&
		document.getElementById("bt3").value == "o" ||
		document.getElementById("bt4").value == "o" &&
		document.getElementById("bt5").value == "o" &&
		document.getElementById("bt6").value == "o" ||
		document.getElementById("bt7").value == "o" &&
		document.getElementById("bt8").value == "o" &&
		document.getElementById("bt9").value == "o" ||
		document.getElementById("bt1").value == "o" &&
		document.getElementById("bt4").value == "o" &&
		document.getElementById("bt7").value == "o" ||
		document.getElementById("bt2").value == "o" &&
		document.getElementById("bt5").value == "o" &&
		document.getElementById("bt8").value == "o" ||
		document.getElementById("bt3").value == "o" &&
		document.getElementById("bt6").value == "o" &&
		document.getElementById("bt9").value == "o" ||
		document.getElementById("bt1").value == "o" &&
		document.getElementById("bt5").value == "o" &&
		document.getElementById("bt9").value == "o" ||
		document.getElementById("bt3").value == "o" &&
		document.getElementById("bt5").value == "o" &&
		document.getElementById("bt7").value == "o"
){
		alert("O Player Wins!");
		
	}
}




//var player = [Player1, Player2]
//var board = [Diagonal, horrizontal]

//var checkWinner =  function();

//var board = verticle 
//
//var board2 = horrizontal
//
//	if moves = 9 
//	then  draw

//function to decide player



//alert("Player 1 X wins");

//alert("Player 2 O wins");






// 2 arrays
// One for columns 
//one for rows
// Need 4 functions
// need 2 variables
// set event listeners to mark off X's and O's after making board element.
// var for who is the player
// set limit to moves
// later on use 9 if statements to set up AI 
//reset button
