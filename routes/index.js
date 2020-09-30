var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.json({ msg: 'hello there' });
});

module.exports = router;
