const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(34, 32);
    // throw new Error('Value not correct')

    expect(res).toBe(66).toBeA('number');
    // if (res !== 66) {
    //     throw new Error(`Expected 66, but got ${res}`)
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(7);

    expect(res).toBe(49).toBeA('number');
    // if (res !== 49) {
    //     throw new Error(`Expected 49, but got ${res}`)
    // }
})

it('should async square a number', (done) => {
    utils.asyncSquare(2, (product) => {
        expect(product).toBe(4).toBeA('number');
        done();
    });
});

it('should expect some values', () => {
    // expect({name: 'Nora'}).toEqual({name: 'Nora'});
    // expect([2,3,4]).toInclude(5);
    // expect({
    //     name: 'Nora',
    //     age: 32,
    //     location: 'Tennessee'
    // }).toInclude({
    //     name: 23
    // })
})

it('should be a name', () => {
    var user = {
        name: 'Nora Moser',
        age: 32, 
        location: 'here'
    }
    var res = utils.setName(user, 'Nora Moser');

    expect(res).toInclude({
        firstName: 'Nora'
    }).toBeA('object');
    // if (res !== 49) {
    //     throw new Error(`Expected 49, but got ${res}`)
    // }
})