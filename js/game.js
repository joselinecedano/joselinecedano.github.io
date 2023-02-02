console.log("Poke-Match")

//Query Selectors
//let startBtn = document.querySelector(".start")
let gameArea = document.querySelector(".grid")
let timer = document.querySelector(".timer")
let time = document.querySelector(".time")

let firstPick = false ;
let firstPokemon = '';
let secondPick = false;
let secondPokemon = '';

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
    timer(){

 
    }
    reset(){ //maybe?
        // reset timer
        // this.cards.classList.remove("flip")
        // this.firstPick = false 
        // this.firstPokemon = ''
        // this.secondPick = false
        // this.secondPokemon = ''
    }
}

//New PokeMatch Intantiation 
let newGame = new PokeMatch
newGame.shuffle();


    
//Event listener for each card that adds flip class
 newGame.cards.forEach(card =>
    card.addEventListener("click", flipCards = () => {
        console.log(card)
        if(!card.classList.contains("match")){
        //adds flip class to card chosen
        card.classList.toggle('flip')
        if(!firstPick){
        //sets card chosen as firstPick which we will use to compare to the secondPicks id and see if they match
        firstPick = card;     
        firstPokemon = card.getAttribute("id")
        console.log(firstPokemon,"first pick")
        }else {
        //setting second chosen card as players secondPick and getting its id
        secondPick = card;
        secondPokemon = card.getAttribute("id")
        console.log(secondPokemon, "second pick")
        //if the players firstPick and secondPick match
        }if(firstPokemon === secondPokemon){
        console.log("its a match", `${firstPokemon} & ${secondPokemon}`)
        //add class of match and reset the firstPick to false so player can choose their next two cards 
        //by adding match i can 
        firstPick.classList.add("match");
        secondPick.classList.add("match");
        firstPick = false;
        }else {
        console.log("it's not a match!")
    
        }
    }
}))