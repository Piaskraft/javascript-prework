

let playerMove = 'papier';
let computerMove = 'kamień';

printMessage('Gracz wybrał: ' + playerMove);
printMessage('Komputer wybrał: ' + computerMove);




/*

function playGame(playerInput) {
    clearMessages(); // czyścimy stare komunikaty

    const moves = ['kamień', 'papier', 'nożyce'];

    // losowanie ruchu komputera
    const randomNumber = Math.floor(Math.random() * 3);
    const computerMove = moves[randomNumber];

    printMessage('Twój ruch: ' + playerInput);
    printMessage('Ruch komputera: ' + computerMove);

    // sprawdzanie wyniku
    if (playerInput === computerMove) {
        printMessage('Remis!');
    } else if (
        (playerInput === 'papier' && computerMove === 'kamień') ||
        (playerInput === 'kamień' && computerMove === 'nożyce') ||
        (playerInput === 'nożyce' && computerMove === 'papier')
    ) {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Komputer wygrywa!');
    }
}

// Tworzenie przycisków
const buttonRock = document.createElement('button');
buttonRock.innerText = 'Kamień';
buttonRock.addEventListener('click', function () {
    playGame('kamień');
});

const buttonPaper = document.createElement('button');
buttonPaper.innerText = 'Papier';
buttonPaper.addEventListener('click', function () {
    playGame('papier');
});

const buttonScissors = document.createElement('button');
buttonScissors.innerText = 'Nożyce';
buttonScissors.addEventListener('click', function () {
    playGame('nożyce');
});

// Wstawianie przycisków do strony
const buttonsContainer = document.getElementById('buttons');
buttonsContainer.appendChild(buttonRock);
buttonsContainer.appendChild(buttonPaper);
buttonsContainer.appendChild(buttonScissors);
*/