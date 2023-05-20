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

// class Square extends Shapes {

// }

// class Circle extends Shapes {

// }
module.exports = { Triangle }