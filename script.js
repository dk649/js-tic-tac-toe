window.addEventListener('DOMContentLoaded', (event) => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#Player')


    let currentPlayer = "Player X"

    squares.forEach(square => {

        square.addEventListener('click', clickOutcome)
    })

    function clickOutcome(e){
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer

        if(currentPlayer === 'Player X') {
            squares[index].classList.add('playerx')
            currentPlayer = 'Player O'
        } 
        else {

            squares[index].classList.add('playero')
            currentPlayer = 'Player X'
        }

        
    }
});