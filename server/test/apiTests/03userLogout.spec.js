/**
 * @description Unit test for user logout.
 * @access Protected route.
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('User logout API test - Basic tests', ()=> {
    it('Check if the API test exist - API should return 401', (done)=> {
        chai.request(app)
            .post('/api/auth/logout')
            .end((err, res)=> {
                chai.assert.notEqual(res.status, 404)
            done();
        })
    })
})

describe('User logout success Route', ()=> {
    let email = faker.internet.email(),
        jwt = '';
    before('********Getting user token*******', (done)=> {
        chai.request(app)
            .post('/api/auth/register')
            .set('Content-Type', 'application/json')
            .send({
                name: faker.name.firstName() + " " + faker.name.lastName(),
                email: email,
                password: "Jithin3433!",
                phone_number: faker.phone.phoneNumber()
            }).end((err, res)=> {
                chai.assert.equal(res.status, 201);
                chai.request(app)
                    .post('/api/auth/login')
                    .set('Content-Type', 'application/json')
                    .send({
                        email: email,
                        password: "Jithin3433!",
                        role: 1
                    }).end((err, res)=> {
                        jwt = res.body.token;
                        chai.assert.equal(res.status, 200);
                        done();
            })
        })
    })
    
    it('Unit test for user logout', (logoutDone) => {
        chai.request(app)
            .post('/api/auth/logout')
            .set('Content-Type', 'application/json')
            .set('x-api-key', jwt)
            .end((err, res)=>{
                chai.assert.equal(res.status, 200);
                logoutDone();
            })
    })
})