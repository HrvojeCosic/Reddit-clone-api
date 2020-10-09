const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const Post = require('../models/Post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const postController = require('../controllers/postController');

//CREATE NEW POST
router.post('/', postController.createNewPost);

//GET ALL POSTS
router.get('/', postController.getAllPosts);

//COMMENT ON A POST
router.post('/post/:id', postController.createNewComment);

module.exports = router;
