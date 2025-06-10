const http = require('http');
const PORT = process.env.PORT || 80;


const server = http.createServer((req, res) => {
  res.end('Hello from AIT...!!!');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

