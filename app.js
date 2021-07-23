const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: './.env' });

const apiRouter = require('./router/api.router');
const { PORT } = require('./config/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            customCode: err.customCode || 0,
            message: err.message || ''
        });
});

app.listen(PORT, () => {
    console.log(`App listen port ${PORT}`);
});
