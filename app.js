const express = require('express');
const app = express();
const PORT  = process.env.PORT || 5000;
const bodyParser = require('bodyParser');

app.use(bodyParser.urlencoded({extended:false}))

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT)
})