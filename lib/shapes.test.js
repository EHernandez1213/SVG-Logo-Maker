const {Triangle, Square, Circle} = require('./shapes.js');


describe('Triangle', () => {
    test('This should render a triangle as a polygon element in a specific color', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('Square', () => {
    test('This should render a square as a rect element in a specific color', () => {
        const square = new Square();
        square.setColor("blue");
        expect(square.render()).toEqual('<rect width="200" height="200" style="fill="blue" />');
    })
})

describe('Circle', () => {
    test('This should render a circle as a circle element in a specific color', () => {
        const circle = new Circle();
        circle.setColor("red");
        expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" fill="red" />');
    })
})