

function Winner (setIsPlayAgain) {
    const wonPopup = document.querySelector('.popup-modal');
    const backdrop = document.querySelector('.backdrop');
    const playAgainBtn = document.querySelector('#close-modal');

    wonPopup.classList.toggle('show');
    backdrop.classList.toggle('show');
    playAgainBtn.addEventListener('click', function() {newGame(setIsPlayAgain);});
}

function newGame (setIsPlayAgain) {
    const backdrop = document.querySelector('.backdrop');
    const wonPopup = document.querySelector('.popup-modal');
    setIsPlayAgain(true);
    wonPopup.classList.toggle('show');
    backdrop.classList.toggle('show');
}

export default Winner;