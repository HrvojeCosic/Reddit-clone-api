const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const postController = require('../controllers/postController');

//CREATE NEW POST
router.post('/', postController.createNewPost);

//GET ALL POSTS
router.get('/', postController.getAllPosts);

//GET ONE POST
router.get('/post/:id', postController.getPost);

//COMMENT ON A POST
router.post('/post/:id', postController.createNewComment);

//SEARCH FOR A POST
router.get('/searchPost/:value', postController.getPostTitle);

//UPVOTE/DOWNVOTE A POST
router.put('/votePost', postController.votePost);

module.exports = router;
