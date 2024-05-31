const initWebRouter = require('./Router/router_main');
const initAPIRouter = require('./Router/api');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Cho dữ liệu dạng JSON
app.use(express.urlencoded({ extended: true })); // Cho dữ liệu dạng x-www-form-urlencoded

initWebRouter(app);
initAPIRouter(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
