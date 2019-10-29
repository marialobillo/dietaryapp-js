const fs = require('fs');
const http = require('http');
const url = require('url');

let data = '';

fs.readFile('./public/food.json', 'utf8', (err, fileContents) => {
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

module.exports = http.createServer((req, res) => {

    if(req.url === '/'){
      res.statusCode = 200;
      //res.setHeader('Content-Type', 'text/html')
      res.end('Hello');
    }
  
    if(req.url === '/api/nutrients' && req.method == 'GET'){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      console.log(typeof(data));
    } 
  

  });