const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// serve everything in /public as static files
app.use(express.static(path.join(__dirname, 'public')));

// optional: ensure index.html is served for the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Tic-tac-toe app running at http://localhost:${PORT}`);
});
