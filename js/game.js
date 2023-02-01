console.log("Poke-Match")

//Query Selectors
let startBtn = document.querySelector(".start")
let gameArea = document.querySelector(".grid")
let timer = document.querySelector(".time")


//Game class
class PokeMatch {
    constructor(){
        this.cards = document.querySelectorAll(".card");
        this.firstPick = false ;
        this.firstPokemon = '';
        this.secondPick = false;
        this.secondPokemon = '';
    }
   shuffle(){
    for (let i = 0; i < this.cards.length; i++){
        let pokemonShuffle = this.cards[Math.floor(Math.random()*this.cards.length)];
        // append it to the section that contains the grid so it shows the shuffled cards inside of the game browser
        gameArea.appendChild(pokemonShuffle)
        console.log(pokemonShuffle) 
        }
    }
    flipCards(){
        this.cards.forEach(card => {
            let card = card.addEventListener("click",()=> {
                card.classList.add(".flip")

            })
        })
    }
    checkForMatches(){
        //if firstPick is false that means a card hasnt been picked yet and will run whats inside
        if(!firstPick){
            
            console.log(firstPick, "first pick")
        }
 
    }
    reset(){ //maybe?
        //reset timer
        // this.cards.classList.remove("flip")
        // this.firstPick = false 
        // this.firstPokemon = ''
        // this.secondPick = false
        // this.secondPokemon = ''
    }
     
}
let newGame = new PokeMatch
newGame.shuffle();
newGame.flipCards();
newGame.checkForMatches()

    
    