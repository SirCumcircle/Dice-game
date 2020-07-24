
let n,v;
n = Math.random()*6+1;
v = Math.random()*6+1;
let randomNumber1 = Math.floor(n);
let randomNumber2 = Math.floor(v);


// document.querySelector(".leftDice").src = "images/dice" +randomNumber1+ ".png";
document.querySelector(".leftDice").setAttribute("src","images/dice" + randomNumber1 + ".png");
document.querySelector(".rightDice").setAttribute("src","images/dice" + randomNumber2 + ".png");


if(randomNumber1<randomNumber2){

  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else{
  document.querySelector("h1").innerHTML = "Its a draw";

}
