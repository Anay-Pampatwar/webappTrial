
let chai = require('chai');
let chaiHTTP = require('chai-http');
var should = chai.should(); 
const app = require('./server.js');
chai.use(chaiHTTP); 
describe('Test111', () => {
    it('200 OK', () => {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                (response).should.have.status(200);
                done();
            });
    });
});

