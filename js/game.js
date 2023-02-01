console.log("Poke-Match")

//Query Selectors
let startBtn = document.querySelector(".start")
let gameArea = document.querySelector(".grid")
class PokeMatch {
    constructor(){
        this.cards = document.querySelectorAll(".card")
    }
    matches(){


    }
}


let newGame = new PokeMatch



























//this stores what the first and second card user chooses in order to check if they matched 
// let firstPick;
// let secondPick;
// //Function that checks for matched cards
// const checkMatch = () => {
//     for (let i = 0; i < cards.length; i++){
//         if(){ //set firstPick to the card user selected 
//         firstPick = cards[i]
//         }else{
//             secondPick= cards[i]
//         }
//     if(firstPick.id === secondPick.id){
//         console.log("Its a match!")
        
//     }else {
//     console.log("They weren't a match!")
// }

// }}
// checkMatch()
//Function that flips cards 
// const flip = () => {
//     for (let i = 0; i < cards.length; i++){
//         do{
//             cards[i].classList.toggle("flip")
//         }while(cards[i].id !== cards[i].id)
//         if(cards[i].id === cards[i].id){
//             cards[i].remove("flip")
//         }
// }}
//Function that unflips cards if they're not a match
   
//Function for Winner 

//Function for Loser

//Function for Timer

//Function for Resetting the Game

//Function that Randomizes/Shuffles Cards


//Event Listeners
//Event listener for each card that adds flip class 
 newGame.cards.forEach(card => 
    card.addEventListener("click", ()=>{
        card.classList.toggle('flip');
        console.log()
    }
 ))
startBtn.addEventListener("click", ()=>{
    for (let i = 0; i < newGame.cards.length; i++){
        let pokemonShuffle = newGame.cards[Math.floor(Math.random()*newGame.cards.length)];
        gameArea.appendChild(pokemonShuffle)
        console.log(pokemonShuffle) 
}})