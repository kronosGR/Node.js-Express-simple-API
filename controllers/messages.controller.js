const path = require('path');

function getMessages(req, res) {
  //res.send('Helloo');
  //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'img.png'));
  res.render('message', {
    title: 'Message to my friends',
    friend: 'Kronos'
  });
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage
};