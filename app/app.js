let selection = document.querySelectorAll(".item");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
//defining current value of user
let user;
let computer;
let FILEPATH = {
    rock : "./images/rock paper scissors/rock.svg",
    paper : "./images/rock paper scissors/paper.svg",
    scissors: "./images/rock paper scissors/scissors.svg"
}

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
                break;
        
            case "scissors":
                console.log("user: you won");
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
                break;
        
            case "rock":
                console.log("user: you won");
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
                break;
        
            case "paper":
                console.log("user: you won");
                break;
            default:
                console.log("This is a draw");
        }
    }

}

