const path = require('path');

function getMessages(req, res) {
  //res.send('Helloo');
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'img.png'));
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage
};