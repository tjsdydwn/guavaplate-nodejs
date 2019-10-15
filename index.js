const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

const app = express();

//Route 등록
const rootRouter = require('./routes/main');

// View 엔진 등록 - EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//middleware 등록
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => { res.redirect('/main') });

//Router 등록
app.use('/main', rootRouter);

const server = app.listen(3000, () => {
    console.log('server on!');
})