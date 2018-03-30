const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(34, 32);
    // throw new Error('Value not correct')
    if (res !== 66) {
        throw new Error(`Expected 66, but got ${res}`)
    }
});

it('should square a number', () => {
    var res = utils.square(7);

    if (res !== 49) {
        throw new Error(`Expected 49, but got ${res}`)
    }
})