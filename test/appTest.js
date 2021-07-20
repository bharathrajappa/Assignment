import supertest from 'supertest';
const request = supertest('https://interviewtestapi.azurewebsites.net/');
import { expect } from 'chai';

describe('API Tests', () => {
    it('Schema validation', () => {
       return request.get('api/candidate').then((res) => {
           expect(res.statusCode).to.eql(200);
           expect(res.body).to.not.be.empty;
           res.body.forEach((element) => {
               expect(element.plateNo).to.be.a('string');
               expect(element.driverName).to.be.a('string');
               expect(element.lat).to.be.a('number');
               expect(element.lng).to.be.a('number');
               expect(element.location).to.be.a('string');
               expect(element.imageURL).to.be.a('string');
               expect(element.lastUpdated).to.be.a('string');
           });
        

        });

    });

    it('To make sure all the values are present in API response', () => {
        return request.get('api/candidate').then((res) => {
            res.body.forEach((element) => {
                expect(element.plateNo).to.be.not.null;
                expect(element.driverName).to.be.not.null;
                expect(element.lat).to.be.not.null;
                expect(element.lng).to.be.not.null;
                expect(element.location).to.be.not.null;
                expect(element.imageURL).to.be.not.null;
                expect(element.lastUpdated).to.be.not.null;

            });

        });
    

    });
});
