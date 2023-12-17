function createStateGame() {
    return {
        views: {
            board: document.querySelector(".game__board"),
            reset: document.querySelector(".game__btn-reset")
        },
        values: {
            previousItem: null,
            isFirstRound: true
        }
    }
}


export default createStateGame()