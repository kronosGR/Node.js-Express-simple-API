function getMessages(req, res) {
  res.send('Helloo');
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage
};