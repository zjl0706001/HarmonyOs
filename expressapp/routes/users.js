const express = require('express');
const router = express.Router();
const {login,register} = require('../middleware/users')
//users
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/login',login)
router.post('/register',register)
module.exports = router;
