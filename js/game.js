console.log("Poke-Match")

//Query Selectors
let strtButton = document.querySelector(".startBtn")
let resetButton = document.querySelector(".restartBtn")
let gameArea = document.querySelector(".grid")  

let timer = document.querySelector(".timer");
let time = document.getElementById("time");


//Game class
class PokeMatch {
    constructor(){
        this.cards = document.querySelectorAll(".card");
    }
   shuffle(){
    for (let i = 0; i < this.cards.length; i++){
        let pokemonShuffle = this.cards[Math.floor(Math.random()*this.cards.length)];
        // append it to the section that contains the grid so it shows the shuffled cards inside of the game browser
        gameArea.appendChild(pokemonShuffle)
        console.log(pokemonShuffle) 
        }
    }
    win(){
        if (gameArea.children.length === gameArea.querySelectorAll(".match").length){
            console.log("You have won Poke-Match") 
            // alert("You have won Poke-Match!!")
            clearInterval(stopTime)
            window.location.href="winner.html"
            }else{ 
                console.log("keep going")
            }
     }
    lose(){
            clearInterval(stopTime);
            // alert("Game Over!");
            strtButton.style.display = "block";
            window.location.href= "loser.html";
    }
   
}
//New PokeMatch Intantiation 
let newGame = new PokeMatch
newGame.shuffle();


//Timer for Game 
 let totalTime = 90
 let stopTime;
function timeBar(){
    time.style.width = (totalTime/ 90) * 100 + "%"; //means 100%
    newGame.win()
    if(totalTime == 0){
           newGame.lose()
    }else{
            totalTime--;
            // console.log(totalTime)
        }
}
//Event Listener for Reset Button
resetButton.addEventListener("click", ()=>{
    window.location.reload()
})

// Variables for flipCard function
let firstPick = false ;
let firstPokemon = '';
let secondPick = false;
let secondPokemon = '';

//Event listener for each card that adds flip class
strtButton.addEventListener("click", ()=> {
    stopTime = setInterval(timeBar, 1000)
    strtButton.style.display = "none"

})
 newGame.cards.forEach(card =>
    card.addEventListener("click", flipCards = () => {
        console.log(card)
        if(!card.classList.contains("match")){
            console.log(!card.classList.contains("match")) // if its false that the card we clicked has flip in its class then run code
        //adds flip class to card chosen
        card.classList.toggle('flip')
        console.log(firstPick)
        if(!firstPick){
        //sets card chosen as firstPick which we will use to compare to the secondPicks id and see if they match
        firstPick = card;     
        firstPokemon = card.getAttribute("id")
        console.log(firstPokemon,"first pick")
        console.log(firstPick)
        } else {
        //setting second chosen card as players secondPick and getting its id
        secondPick = card;
        secondPokemon = card.getAttribute("id")
        console.log(secondPokemon, "second pick")
        //if the players firstPick and secondPick match
        }if(firstPokemon === secondPokemon){
        console.log("its a match", `${firstPokemon} & ${secondPokemon}`)
        //add class of match and reset the firstPick to false so player can choose their next two cards 
        //by adding match i can maybe later access it and check if all the cards have a match then player wins if not player loses 
        firstPick.classList.add("match");
        secondPick.classList.add("match");
        firstPick.removeEventListener("click",flipCards())
        secondPick.removeEventListener("click", flipCards())
        firstPick = false;
        }else {
        console.log("it's not a match!")

        }
    }
}))