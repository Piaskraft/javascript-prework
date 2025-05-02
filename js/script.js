function getMoveName(argMoveId) {
    if (argMoveId == 1) return 'kamień';
    if (argMoveId == 2) return 'papier';
    if (argMoveId == 3) return 'nożyce';
    printMessage('Nie znam ruchu o id ' + argMoveId);
    return 'nieznany ruch';
}
function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    printMessage('Komputer zagrał: ' + computerMove);
    printMessage('Gracz zagrał: ' + playerMove);

    if (computerMove == playerMove) {
        printMessage('Remis!');
    } else if (
        (computerMove == 'kamień' && playerMove == 'papier') ||
        (computerMove == 'papier' && playerMove == 'nożyce') ||
        (computerMove == 'nożyce' && playerMove == 'kamień')
    ) {
        printMessage('Ty wygrywasz!');
    } else if (playerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch gracza!');
    } else {
        printMessage('Komputer wygrywa!');
    }
}
document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
