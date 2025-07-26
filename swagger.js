const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    version: "1.0.0",
    title: "Users API",
    description: "API for managing users"
  },
//  host: "localhost:3000",
  host: "https://cse341-summer.onrender.com",
  basePath: "/",
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: "Users",
      description: "User management endpoints"
    }
  ]
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/users.js'];

if (process.env.NODE_ENV !== 'production') {
  swaggerAutogen(outputFile, endpointsFiles, doc);
}