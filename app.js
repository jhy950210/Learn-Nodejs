const express = require('express');

const app = express();
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jhy950210:qwer1234@learnmongdb.yiiph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Succesful response.');
});


app.listen(port, () => console.log(`Example app is listening on port ${port}`));