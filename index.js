const { createServer } = require('http');
const { parse } = require("url")

const PORT = 3100;
const readyMsg = () => console.log('Server on http://localhost:' + PORT);

const headers = {
  json: ['Content-Type', 'application/json'],
  text: ['Content-Type', 'text/html']
}

const server = createServer((req, res) => {
  console.log('req', req.url)

  res.setHeader(...headers.json);
  res.end(JSON.stringify({ testMsg: 'test', url: parse(req.url, true) }));
})

server.listen(PORT, readyMsg)
