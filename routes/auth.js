const express = require('express');
const loginAuth = require('../controllers/loginauth');
const router = express.Router();

router.post('/', loginAuth);

module.exports = router;