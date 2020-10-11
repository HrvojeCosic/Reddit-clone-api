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

//COMMENT ON A POST
router.post('/post/:id', postController.createNewComment);

//GET ALL COMMENTS OF THE CLICKED-ON POST
router.get('/:id', postController.getComments);

//SEARCH FOR A POST
router.get('/searchPost/:value', postController.getPost);

module.exports = router;
