
let chai = require('chai');
let chaiHTTP = require('chai-http');

const app = require('./server.js');
chai.use(chaiHTTP); 
const expect = chai.expect;


describe('Health endpoint', function () {
    it('should return 200 status code', function (done) {
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});
