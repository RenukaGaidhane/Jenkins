const http = require('http');


const server = http.createServer((req, res) => {
  res.end('Hello from Jenkins-hosted app!');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

