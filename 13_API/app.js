require('dotenv').config();

const express = require('express');
const app = express();

// Routes
const router = require('./routes/Router.js');
// API Port
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log('API rodando na porta: ' + port);
})