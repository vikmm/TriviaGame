$( document ).ready(function() {
    console.log( "ready!" );

function intro(){
alert("Welcome to Rock Trivia!");
}
intro();

var timer ;
var correct = 0;
var wrong = 0;
var counter = 30;

function startGame(){
	timer = setInterval(countDown, 1000);
	//timer = timer + 30;
	
}
startGame();

function countDown(){
	counter--;
	console.log(counter);
	//$("#timer").html(timer)
	console.log("countDown");
	$("#timer").html(counter);

	if (counter === 0){
		endGame();
	}
}

function endGame(){
	counter = 30;
	alert("GAME OVER");
	clearInterval(timer);
	$("timer").hide();
	$("form").hide();
	$("#correct").html(correct);
	$("#wrong").html(wrong);

}

$( "a3 option:checked" ).val();





});

