/**
 * User
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

const { Router } = require('express');

const controller = require('./user.controller');
const auth = require('./../../auth/auth.service');

const router = new Router();


router.get('/', auth.isAuthenticated(), controller.index);

router.get('/:id', auth.isAuthenticated(), controller.show);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.post('/', controller.create);

module.exports = router;
