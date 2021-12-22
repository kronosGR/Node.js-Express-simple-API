const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3001;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // after next() everything is being executed after reached the endpoint and returns
  // the control back to middlewares
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// on /
// app.use(express.static('public'));
//on /site
app.use('/site', express.static(path.join(__dirname, 'public')));
// static files is better to be served with cdn like Amazon cloudfront and akamai

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index',{
    title: 'My friends',
    caption: 'Let go skiing'
  })
})
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});