const express = require('express')
var path    = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/public/html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html')
});

app.get('/mentor', (req, res) => {
    res.render('mentor.html')
});

app.get('/qna', (req, res) => {
    res.render('q&a.html')
});

app.get('/contact', (req, res) => {
    res.render('contact.html')
});



var port = process.env.PORT || 5000;
app.listen(port);
console.log('Listening on port ',  port);