const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.post('/', (req, res, next) => {
	console.log(req.body.username);
});

module.exports = router;
