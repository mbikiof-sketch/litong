#!/usr/bin/env node
/**
 * Start a local web server for the output directory
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT_DIR = path.join(__dirname, '..', 'output');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Handle root path
  let filePath = req.url === '/' ? '/index.html' : req.url;
  
  // Remove query strings
  filePath = filePath.split('?')[0];
  
  // Resolve full path
  const fullPath = path.join(ROOT_DIR, filePath);
  
  // Security check - prevent directory traversal
  if (!fullPath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }
  
  // Check if file exists
  fs.stat(fullPath, (err, stats) => {
    if (err) {
      // Try with .html extension
      const htmlPath = fullPath + '.html';
      fs.stat(htmlPath, (err2, stats2) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end(`File not found: ${req.url}`);
          return;
        }
        serveFile(htmlPath, stats2, res);
      });
      return;
    }
    
    if (stats.isDirectory()) {
      // Try index.html in directory
      const indexPath = path.join(fullPath, 'index.html');
      fs.stat(indexPath, (err, indexStats) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end(`Directory index not found: ${req.url}`);
          return;
        }
        serveFile(indexPath, indexStats, res);
      });
      return;
    }
    
    serveFile(fullPath, stats, res);
  });
});

function serveFile(filePath, stats, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stats.size
  });
  
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
  
  stream.on('error', (err) => {
    console.error(`Error reading file: ${err.message}`);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving files from: ${ROOT_DIR}`);
});
