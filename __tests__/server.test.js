// 'use strict';

// const supertest = require('supertest');
// const server = require('../src/server');
// const { sequelize } = require('../src/models');
// const request = supertest(server.app);

// beforeAll(async () => {
//   await sequelize.sync();
// });

// afterAll(async () => {
//   await sequelize.drop();
// });

// describe('Testing server', () => {
//   test('POST /signup to create a user', async () => {
//     let response = await request.get('/signup');

//     expect(response.status).toEqual(200);
//     expect(response.body.results).toBeTruthy();
//   });

//   test('POST /signin to login a user and receive a token.', async () => {
//     let response = await request.post('/signin').send({
//       username: 'Test',
//       password: 'test',
//     });

//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('Test');
//     expect(response.body.password).toEqual('test');
//   });

//   test('Should UPDATE pet', async () => {
//     let response = await request.put('/api/pet/1').send({
//       name: 'Jojo',
//       personId: 1,
//     });

//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('Jojo');
//     expect(response.body.personId).toEqual(1);
//   });

//   test('Should DELETE pet', async () => {
//     let response = await request.delete('/api/pet/1');

//     expect(response.status).toEqual(200);
//   });
// });

// test('Will this return a 404 error - bad path', async () => {
//   let response = await request.get('/api/notAnEndpoint');

//   expect(response.status).toEqual(404);
//   expect(response.body.message).toEqual('Error 404 - Incorrect Path');
// });

// test('Will this return a 404 error - bad method', async () => {
//   let response = await request.patch('/api/person');

//   expect(response.status).toEqual(404);
//   expect(response.body.message).toEqual('Error 404 - Incorrect Method');
// });

// test('Should READ person', async () => {
//   let response = await request.get('/api/person');

//   expect(response.status).toEqual(200);
//   expect(response.body.results).toBeTruthy();
// });

// test('Should CREATE person', async () => {
//   let response = await request.post('/api/person').send({
//     name: 'Chester',
//     age: 100,
//   });

//   expect(response.status).toEqual(200);
//   expect(response.body.name).toEqual('Chester');
//   expect(response.body.age).toEqual(100);
// });

// test('Should UPDATE person', async () => {
//   let response = await request.put('/api/person/1').send({
//     name: 'Toyota',
//     age: 50,
//   });

//   expect(response.status).toEqual(200);
//   expect(response.body.name).toEqual('Toyota');
//   expect(response.body.age).toEqual(50);
// });

// test('Should DELETE person', async () => {
//   let response = await request.delete('/api/person/1');

//   expect(response.status).toEqual(200);
// });
