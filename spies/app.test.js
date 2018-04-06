const expect = require('expect');
const rewire = require('rewire');

var app = reqire('./app');


describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db)

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Nora', 32);
        expect(spy).toHaveBeenCalled('Nora', 32);
    });

    it('should call saveUser with user object', () => {
        var email = 'n@c.com';
        var password = 'klfd';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    });
});