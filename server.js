//This script is ran from the GH Actions workflow for testing against
//pull requests and commits using Playwright
//We need this to start a local server in the GitHub Runner

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.htm' : req.url;
  filePath = path.join(__dirname, filePath);

  // Check if the requested file is an MP4 file
  // Need this part to play mp4 files inside the browser
  // otherwise when you click links to them they go to
  // downloads folder instead.
  if (path.extname(filePath) === '.mp4') {
    // Set Content-Type header to video/mp4 for MP4 files
    res.setHeader('Content-Type', 'video/mp4');
  }

  // Check if the requested file is in the 'html' folder
  const htmlFolderPath = path.join(__dirname, 'html');
  const htmlFilePath = path.join(htmlFolderPath, filePath);
  const fileExistsInHtmlFolder = fs.existsSync(htmlFilePath);

  // Serve the file from the appropriate location
  if (fileExistsInHtmlFolder) {
    fs.readFile(htmlFilePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not Found');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not Found');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Function to determine Content-Type header based on file extension
// Without this part the animated dog gif doesn't appear and there
// is just a blank spot there
// function getContentType(filePath) {
//   const extname = path.extname(filePath);
//   switch (extname) {
    // case '.html':
    //   return 'text/html';
    // case '.css':
    //   return 'text/css';
    // case '.js':
    //   return 'application/javascript';
    // case '.png':
    //   return 'image/png';
    // case '.jpg':
    //   return 'image/jpeg';
    //case '.gif':
      //return 'image/gif';
    //case '.mp4':
      //return 'video/mp4';
  //   default:
  //     return 'application/octet-stream';
  // }
//}