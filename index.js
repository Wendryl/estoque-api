require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./src/routes/routes');

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen((process.env.PORT || 3000), () => {
    console.log('App running on port', process.env.PORT || 3000)
});