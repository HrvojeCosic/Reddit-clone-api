const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const postController = require('../controllers/postController');

router.post('/', postController.createNewPost);
router.get('/', postController.getAllPosts);
router.get('/post/:id', postController.getPost);
router.post('/post/:id', postController.createNewComment);
router.get('/searchPost/:value', postController.getPostTitle);
router.put('/votePost', postController.votePost);

module.exports = router;
