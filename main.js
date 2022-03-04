let player1El = document.querySelector(".player1");
let player2El = document.querySelector(".player2");
let player1Btn = document.querySelector(".btn-player1");
let player2Btn = document.querySelector(".btn-player2");
let gameLevel1 = document.querySelector('#game-level')
let resetBtn = document.querySelector('.reset')

let scorePlayer1 = 0
let scorePlayer2 = 0
let gameLevel = 3
let gameOver = false


player1Btn.addEventListener('click', () => {
    if(!gameOver){
        scorePlayer1++
        if(gameLevel <= scorePlayer1 ){
            gameOver = true
            player1El.style.color = 'green'
            player2El.style.color = 'red'
        }
    }
    player1El.textContent = scorePlayer1
})



player2Btn.addEventListener('click', () => {
    if(!gameOver){
        scorePlayer2++
        if(gameLevel <= scorePlayer2 ){
            gameOver = true
            player1El.style.color = 'red'
            player2El.style.color = 'green'
        }
    }
    player2El.textContent = scorePlayer2
})
    

gameLevel1.addEventListener('change', ()=> {
    let value = +gameLevel1.value
    gameLevel = value
})

resetBtn.addEventListener('click', ()=> {
    scorePlayer1 = 0
    scorePlayer2 = 0
    gameOver = false
    player1El.textContent = "0"
    player2El.textContent = "0"
    player1El.style.color = 'black'
    player2El.style.color = 'black'
}) 












