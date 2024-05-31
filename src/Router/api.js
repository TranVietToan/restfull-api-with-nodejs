const express = require('express');
const postsController = require('../Controllers/PostsController');

const router = express.Router();

const initAPIRoute = (app)=>{
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); // Cho phép tất cả nguyên gốc
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    });
    
    router.get('/posts', postsController.getAllPosts);
    router.post('/create-new-posts', postsController.createNewPosts);
    router.put('/update-posts', postsController.updatePosts);
    router.delete('/delete-posts/:id', postsController.deletePosts)
    return app.use("/api/v1/", router)
}

module.exports = initAPIRoute;