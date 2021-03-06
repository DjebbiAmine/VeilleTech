const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');

const router = express.Router();


router.post(
  '/signup',
  [
    check('name')
      .not()
      .isEmpty(),
    check('lastname')
      .not()
      .isEmpty(),
    check('numcin').isLength({ min: 8 }),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersController.signup
);

router.post(
  '/logout',
  [
    check('userID')
      .not()
      .isEmpty(),
    check('Info')
      .not()
      .isEmpty(),
    check('Electro')
      .not()
      .isEmpty(),
    check('Meca')
      .not()
      .isEmpty(),

  ],
  usersController.logout
);

router.post('/login', usersController.login);

module.exports = router;
