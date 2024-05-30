const express = require('express');

const router = express.Router();

const initWebRoute = (app) => {
    router.get("/", ( req, res )=>{
        res.send('I am ILL');
    })
    return app.use("/", router)
}

module.exports = initWebRoute