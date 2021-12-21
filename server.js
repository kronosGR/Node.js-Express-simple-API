const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3001;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // after next() everything is being executed after reached the endpoint and returns
  // the control back to middlewares
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get('/', );

app.post('/friends', friendsController.postFriend );
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});