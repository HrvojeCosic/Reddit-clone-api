const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userController = require('../controllers/userController');

router.post('/', userController.createNewUser);

router.post('/login', userController.login);

module.exports = router;
