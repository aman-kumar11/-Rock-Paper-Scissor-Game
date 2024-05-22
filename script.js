let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const youScore = document.querySelector("#user-score");
const comScore = document.querySelector("#comp-score");

//Modular way of programming to create multiple functions to complete every small task.

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Draw. Play Again";
    msg.style.cssText = "background-color: cyan; color:black;";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `You Win !! ${userChoice} beats ${compChoice}`;
        youScore.innerText = ++userScore;
        youScore.classList.remove("animate-score"); // Remove animation class before adding again
        void youScore.offsetWidth; // Trigger reflow to restart the animation
        youScore.classList.add("animate-score");
        msg.style.cssText = "background-color: greenyellow; color:black;";
    }
    else{
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
        comScore.innerText = ++compScore;
        comScore.classList.remove("animate-score"); // Remove animation class before adding again
        void comScore.offsetWidth; // Trigger reflow to restart the animation
        comScore.classList.add("animate-score");
        msg.style.cssText = "background-color: red; color: black;"
    }
}

const playGame = (userChoice) =>{
    //Generate computer choice
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
       let userWin = true;
       if(userChoice === "rock"){
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
       } 
       else if(userChoice === "paper"){
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
       }
       else{
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
       }
       showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id"); 
       playGame(userChoice);    
    });
});