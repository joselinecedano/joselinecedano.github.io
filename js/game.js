console.log("Poke-Match")

//Query Selectors
const card = document.querySelectorAll(".card")
const face = document.querySelectorAll(".pokemon")
const back = document.querySelectorAll(".poke-ball")

const cards = Array.of(card)
console.log(cards)

//Class for the Game
class PokeMatch{
    constructor(){
        this.cards= 
        this.matches= matches
        this.shuffle = shuffle
        this.flip = flip
        this.unflip = unflip
        this.winner = winner
        this.loser= loser
        this.timer = timer
        this.resetGame = resetGame
        }//Function that checks for matched cards and stores them?

    matches(){ //if the first card we click matched the second card remove event listener
        if( cards[i]===cards[i]){
            card.removeEventListener("click")
        }  else{ //if the cards do not match unflip the cards
            //this.unflip()
        }     

        }//Function that Randomizes/Shuffles Cards
    shuffle(){

        }//Function that flips cards
    flip(){ 
       
        }//Function that unflips cards
    unflip(){

        }//Function for Winner 
    winner(){

        }//Function for Loser
    loser(){

        }//Function for Timer
    timer(){

        }//Function for Resetting the Game
    resetGame(){

    }
}


//Event Listeners
    card.forEach(card => 
        card.addEventListener("click", ()=>{
            card.classList.toggle('toggleCard')
        }
    )
)  