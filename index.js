const express = require('express');
const app = express();
const errMiddleware = require('./middlewares/errMiddlewares');
const port = 3000;

app.use(express.json());

app.use(errMiddleware);

app.listen(port, () => console.log(`Example app listening on port port!`));
