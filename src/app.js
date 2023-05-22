const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes/router');
app.use(express.json());

app.use('/api/v1',route)

//cors issue 
const cors = require('cors');
app.use(cors({origin:'*'}));

// set view engine 
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    try {
        const home = path.join(__dirname, 'views/home.ejs')
        var date = new Date().toLocaleString();
        res.render(home, {date})
    } catch (error) {
        res.status(500).send(`${error}`)
    }
})

app.listen(4000, (err) => {
    if (!err) { console.log('connected '); }
})

 module.exports = app;