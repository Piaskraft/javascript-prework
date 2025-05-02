// Funkcja zamieniająca numer ruchu na jego nazwę
function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId);
        return 'nieznany ruch';
    }
}

// Funkcja wyświetlająca wynik gry
function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Komputer zagrał: ' + argComputerMove);
    printMessage('Gracz zagrał: ' + argPlayerMove);

    if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
        printMessage('Ty wygrywasz!');
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch gracza!');
    } else {
        printMessage('Komputer wygrywa!');
    }
}

// Wylosowanie ruchu komputera (1-3)
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba dla komputera:', randomNumber);

let computerMove = getMoveName(randomNumber);

// Pytamy gracza o wybór (1-3)
let playerInput = prompt('Wybierz swój ruch: 1 - kamień, 2 - papier, 3 - nożyce');
console.log('Gracz wpisał:', playerInput);

let playerMove = getMoveName(playerInput);

// Wyświetlenie wyniku gry
displayResult(computerMove, playerMove);
