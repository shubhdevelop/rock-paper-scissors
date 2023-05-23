let selection = document.querySelectorAll(".item");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
//defining current value of user
let user;
let computer;
let currentGameNumber = 0;
let FILEPATH = {
    rock : "./images/rock paper scissors/rock.svg",
    paper : "./images/rock paper scissors/paper.svg",
    scissors: "./images/rock paper scissors/scissors.svg"
}
let gameWonByUser = 0;
let gameWonByComputer = 0;

//Adding event listener to all the selection items
selection.forEach((item)=> {
console.log(item);
item.addEventListener("click", getUserChoice);
})


//function to get the choice of the user  
function getUserChoice(e){
    user = e.target.alt;
   
    player1.src = FILEPATH[user];
    

    console.log("user choice set ;", user);
    //After setting userChoice set computer's choice
    setComputerChoice();
    start() 
}

    
//this sets the computer choice to any random choice
function setComputerChoice(){
        computer = randomChoice()
        player2.src = FILEPATH[computer];
    
        console.log("computer choice set ;", computer);
}



//Make a random guess on behalf of the computer and returns
// option out of any there possible value [rock, paper, scissors]
function randomChoice() {
    let randomChoice = Math.floor( Math.random() * 3 )
    return ["rock", "paper", "scissors"][randomChoice]
}

//evokes the logic of the game after after both player have made their choice
function start(){
    console.log("both computer and Shubham has made a choice now");
    decide(user, computer);
}

//Game logic here
function decide(player1 , player2){

    //based on the player1 choice of rock

    if(player1 == "rock"){
        switch (player2) {
            case "paper":
                console.log("user: You Lost!");
                updateHistory("computer");
                break;
        
            case "scissors":
                console.log("user: you won");
                updateHistory("user");
                break;
            default:
                console.log("This is a draw");
        }
    }

    //based on the player1 choice of rock

    if(player1 == "paper"){
        switch (player2) {
            case "scissors":
                console.log("user: You Lost!");
                updateHistory("computer");
                break;
        
            case "rock":
                console.log("user: you won");
                updateHistory("user");
                break;
            default:
                console.log("This is a draw");
        }
    }

    
    //based on the player1 choice of rock

    if(player1 == "scissors"){
        switch (player2) {
            case "rock":
                console.log("user: You Lost!");
                updateHistory("computer");
                break;
        
            case "paper":
                console.log("user: you won");
                updateHistory("user");
                break;
            default:
                console.log("This is a draw");
        }
        
    }

}


function updateHistory(whoWon){
    let history = document.querySelectorAll(".circle"); 
    // console.log(currentGameNumber);
    console.log(currentGameNumber);
    if(currentGameNumber <= 4){
            history[currentGameNumber++].classList.toggle(whoWon == "user" ? "wonbyplayer" : "wonbycomputer");
            if (whoWon == "user" ){
                gameWonByUser++
            }else {
                gameWonByComputer++
            }
            console.log(currentGameNumber);
    }   
    
    if(currentGameNumber == 5 ){
        setTimeout(function() {
            gameWonByUser>gameWonByComputer ? delayAlert(100, "User Won YAy") : delayAlert(100, "Computer Won Yay!");
        }, 100);
        
    }
    
}
function delayAlert(duration ,alertMsg){
    setTimeout(function() {
        alert(alertMsg);
    }, duration);
}

