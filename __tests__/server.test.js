'use strict';

const supertest = require('supertest');
const app = require('../src/server');
const request = supertest(app);

// describe('Testing the server', () => {

//   test('User can signin', async () => {
//     let response = await request.get('/signin');

//     expect(response.status).toEqual(200);
//     expect(response.body.results).toEqual(12);
//   });
// });

describe('API Routes', () => {
  // AUTH Routes
  describe('AUTH Routes', () => {
    // Test user registration (POST /signup)
    test('should create a new user and send an object with the user and token to the client', async () => {
      const response = await request(app)
        .post('/signup')
        .send({
          username: 'testuser',
          password: 'testpassword',
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('user');
      expect(response.body).toHaveProperty('token');
    });

    // Test user login (POST /signin)
    test('should log in a user and send an object with the user and token to the client', async () => {
      const response = await request(app)
        .post('/signin')
        .auth('testuser', 'testpassword'); // Replace with the registered user's credentials

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('user');
      expect(response.body).toHaveProperty('token');

      // Store the authentication token for authenticated API routes
      authToken = response.body.token;
    });
  });

  // V1 (Unauthenticated API) routes
  describe('V1 (Unauthenticated) Routes', () => {
    // Test adding an item (POST /api/v1/:model)
    test('should add an item to the DB and return an object with the added item', async () => {
      // Make a POST request to add an item to the DB
      // Replace '/api/v1/:model' with the actual endpoint and provide data as needed

      const response = await request(app)
        .post('/api/v1/:model')
        .send({ /* Provide data for the item */ });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('addedItem');
    });

    // Test getting a list of items (GET /api/v1/:model)
    test('should return a list of items', async () => {
      // Make a GET request to retrieve a list of items
      // Replace '/api/v1/:model' with the actual endpoint

      const response = await request(app).get('/api/v1/:model');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });

    // Add more test cases for V1 routes as needed
  });
});