import app from './routes/index';


const sinon = require('sinon');
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

describe('query the homepage', function() {
    it('returns the right result', function() {
        axios.get('https://localhost:5000').then((res) => {
            console.log(res);
        })
    });
})
