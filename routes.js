/**
 * Main application routes
 */

// Import Endpoints
const helloWorld = require('./api/helloworld');
const product = require('./api/product');
const email = require('./api/email');
const user = require('./api/user');
const auth = require('./auth');

module.exports = (app) => {
  // Insert routes below
  app.use('/api/helloworld', helloWorld);
  app.use('/api/product', product);
  app.use('/api/email', email);

    /**
   * @swagger
   * /api/users:
   *    get:
   *      description: Retorna todos los usuarios
   *
  */
  app.use('/api/users', user);


  app.use('/auth', auth);
  // Next routes
  // Endpoints in plural
  // app.use('/api/users', user);
  // app.use('/api/products', product);
};
