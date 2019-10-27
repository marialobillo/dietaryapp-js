const http = require('http');
const fs = require('fs');

//const fileContents = fs.readFileSync('./food.json', 'utf8');


const hostname = '127.0.0.1';
const port = 8080;
let data = '';

fs.readFile('./food.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    data = JSON.parse(fileContents);
    
  } catch(err) {
    console.error(err);
  }
});


const server = http.createServer((req, res) => {

 
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');


  console.log(data);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});