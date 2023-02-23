
  var y = Math.floor(Math.random() * 10 + 1);



guess = 1;

function submit() {
  playername = localStorage.getItem("player_name");
  var x = document.getElementById("guessField").value;
if(x == y){
   alert("CONGRATULATIONS"+playername+"YOU GUESSED IT RIGHT IN"+guess+"guess");
}
else if(x > y){
guess++;
alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else{
guess++;
alert("OOPS SORRY!! TRY A GREATER NUMBER");
}
  
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
    document.getElementById("guessField").value = "";
    var x = document.getElementById("guessField").value;
    if(x == y){
       alert("CONGRATULATIONS"+playername+"YOU GUESSED IT RIGHT IN"+guess+"guess");
    }
    else if(x > y){
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
} 
