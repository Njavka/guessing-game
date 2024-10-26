class GuessingGame {
    constructor() {
        this.minValue = 0;
        this.maxValue = 100;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.currentGuess = Math.round((this.minValue + this.maxValue) / 2);
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
