let express = require('express');
let router = express.Router();
let postController = require('./postController')

// Настроим внутренний маршрут
router.get('/', postController.getPosts)
router.post('/', postController.postPost)

module.exports = router;