const Triangle = require('./shapes.js');

describe("Triangle", () => {
    test('This Should render a Triangle as a polygon element in a specific color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})