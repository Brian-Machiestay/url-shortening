const server = require('../server-side/server');

const sinon = require('sinon');
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;


describe('query the homepage', function() {
    it('returns the right result', function(done) {
        axios.get('http://localhost:5000/')
        .then((res) => {
            expect(res.data).to.deep.equal({status: 'ok'});
            server.close();
            done();
        }).catch((err) => {
            server.close();
            done(err);
        })
    });
})
