{
    // Funkcja getMoveName jako funkcja anonimowa zapisana w const
    const getMoveName = function (argMoveId) {
        if (argMoveId == 1) return 'kamień';
        if (argMoveId == 2) return 'papier';
        if (argMoveId == 3) return 'nożyce';

        printMessage('Nie znam ruchu o id ' + argMoveId);
        return 'nieznany ruch';
    };

    // Funkcja playGame jako funkcja anonimowa zapisana w const
    const playGame = function (playerInput) {
        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(playerInput);

        printMessage('Komputer zagrał: ' + computerMove);
        printMessage('Gracz zagrał: ' + playerMove);

        if (computerMove === playerMove) {
            printMessage('Remis!');
        } else if (
            (computerMove === 'kamień' && playerMove === 'papier') ||
            (computerMove === 'papier' && playerMove === 'nożyce') ||
            (computerMove === 'nożyce' && playerMove === 'kamień')
        ) {
            printMessage('Ty wygrywasz!');
        } else if (playerMove === 'nieznany ruch') {
            printMessage('Nieznany ruch gracza!');
        } else {
            printMessage('Komputer wygrywa!');
        }
    };

    // Obsługa przycisków jako funkcje anonimowe
    const rockBtn = document.getElementById('play-rock');
    const paperBtn = document.getElementById('play-paper');
    const scissorsBtn = document.getElementById('play-scissors');

    rockBtn.addEventListener('click', function () {
        playGame(1);
    });

    paperBtn.addEventListener('click', function () {
        playGame(2);
    });

    scissorsBtn.addEventListener('click', function () {
        playGame(3);
    });
}
