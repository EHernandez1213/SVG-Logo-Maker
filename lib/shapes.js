class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }

}

class Square extends Shapes {
    render() {
        return `<rect width="200" height="200" style="fill="${this.color}" />`
    }

}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="125" r="80" fill="${this.color}" />`
    }
}
module.exports = {Shapes, Triangle, Square, Circle }