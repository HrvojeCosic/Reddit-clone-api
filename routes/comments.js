const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const commentController = require('../controllers/commentController');

//UPVOTE A POST
router.put('/comment/vote/:id', commentController.voteComment);

module.exports = router;
