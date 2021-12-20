const express = require('express');

const app = express();

const PORT = 3001;
const friends = [
  {
    id: 1,
    name: 'Newton'
  }
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // after next() everything is being executed after reached the endpoint and returns
  // the control back to middlewares
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get('/', (req, res) => {
  res.send('Helloo');
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'friend does not exist'
    });

  }
});

app.get('/messages', (req, res) => {
  res.send('Messages');
});

app.post('/messages', (req, res) => {
  console.log('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});