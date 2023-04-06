

const game = document.getElementById('game');
const ctx = game.getContext('2d');

class Circle {
    constructor(position) {
        x = 
    }
}

function randomPos() {
    const rnd = Math.random()

    switch (true) {
        case (0 <= rnd < 0.25): {
            return 'a'
            break;
        }
        case (0.25 <= rnd < 0.50): {
            return 'b'
            break;
        }
        case (0.50 <= rnd < 0.75): {
            return 'c'
            break;
        }
        case (0.75 <= rnd <= 1): {
            return 'd'
            break;
        }
    }
}

function appearCircle() {
    draw(randomPos())
}