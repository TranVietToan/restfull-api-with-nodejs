const express = require('express');
const postsController = require('../Controllers/PostsController');

const router = express.Router();

const initAPIRoute = (app)=>{
    router.get('/posts', postsController.getAllPosts);
    router.post('/create-new-posts', postsController.createNewPosts);
    router.put('/update-posts', postsController.updatePosts);
    router.delete('/delete-posts/:id', postsController.deletePosts)
    return app.use("/api/v1/", router)
}

module.exports = initAPIRoute;