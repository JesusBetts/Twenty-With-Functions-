var wins = 0
var losses = 0
var retry = "y"

function askName() {
    var name = prompt("What is your name?");
    return name;
}
function randNum() {
    var rand = Math.floor(Math.random() * 10) + 1;
    return rand;
}
function userFun() {
	var userTotal = 0;
	var stand = "y";
    do {
		userTotal = userTotal + randNum();
		stand = prompt(`You currently have ${userTotal}. Enter "y" to keep drawing cards and "n" to stand and stop drawing.`);
		
	} while ((stand == "y") && (stand != "n"));
	return userTotal;
}
function comFun() {
	var compTotal = 0;
    do {
		compTotal = compTotal + randNum();
		alert(`The computer has ${compTotal}`)
	} while ( compTotal <= 15);
	return compTotal;
}
function compNum(com, user) {
    if (user == com){
		alert(`You has ${user} and the computer has ${com}. The round is tied No-one wins!`);
		
	}
	if (user > 20){
		alert(`You went over with ${user}`);
		compwin = "y"
		userwin = "n"
	}
	if (com > 20){
		alert(`The computer went over with ${com}`);
		userwin = "y"
		compwin = "n"
	}
	if ((user > com) && (user <= 20)){
		alert(`You win! You had ${user} and the computer had ${com}`)
		userwin = "y"
		compwin = "n"
	}
	if ((com > user) && (com <= 20)){
		alert(`Sorry the computer won with ${com}, and You lost with ${user}`)
		compwin = "y"
		userwin = "n"
	}
	if (userwin == "y") {
		wins = wins + 1
	} 
	if (compwin == "y"){
		losses = losses + 1
	}
}
function game(name) {
	do{
		retry = "n";
		compNum( comFun(), userFun() );
		alert(`${name} currently has won ${wins} matches and the computer has won a total of ${losses} times`)
		retry = prompt(`Do you want to play again? Type "y" retry or "n" to stop`)
	}while(retry == "y")
}
game(askName());