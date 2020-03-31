/**
 * Email
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

const { Router } = require('express');

const controller = require('./email.controller');
const auth = require('./../../auth/auth.service');

const router = new Router();

router.get('/', controller.index);
// router.get('/:id', controller.show);
router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.delete('/:id',auth.isAuthenticated(), controller.destroy);

module.exports = router;
