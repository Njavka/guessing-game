class GuessingGame {
    constructor() {
        this.minValue = 0;
        this.maxValue = 100;
        this.currentGuess = null;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
        this.currentGuess = null;
    }

    guess() {
        this.currentGuess = Math.ceil((this.minValue + this.maxValue) / 2);
        return this.currentGuess;
    }

    lower() {
        this.maxValue = this.currentGuess;
    }

    greater() {
        this.minValue = this.currentGuess;
    }
}

module.exports = GuessingGame;
