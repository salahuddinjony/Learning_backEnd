const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(); // Create an HTTP server instance using the http module. This server will listen for incoming requests and handle them accordingly.

server.on('request', (req, res) => {
  
  if(req.url== '/read-file' && req.method === 'GET') {



  const filePath = path.join(process.cwd(), '/text','data.txt');
  const readStream = fs.createReadStream(filePath); // Create a readable stream for the specified file

  readStream.on('data', (chunk) => {
    res.statusCode = 200;
    res.write(chunk); // Write the chunk to the response stream, write means that we can write multiple times to the response stream, and it will send the data to the client as it is written.
  });

  readStream.on('end', () => {
    res.statusCode = 200;
    res.end("\nFile read complete"); // End the response stream after all data has been sent
  });

  readStream.on('error', (err) => {
    console.error('Error reading file:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });

  // Alternatively, you can use pipe to simplify the code:
  // readStream.on('error', (err) => {
  //   res.statusCode = 500;
  //   res.end('Internal Server Error');
  // });
    
  // readStream.pipe(res);
}else{
  res.statusCode = 404;
  res.end('Route Not Found');

}
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});