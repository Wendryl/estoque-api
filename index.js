const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./src/routes/routes');

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => {
    console.log('App running on port', 3000)
});