const express = require('express');

const databaseFilePath = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const text = 'This is the list of our students';
  try {
    const studs = await countStudents(databaseFilePath);
    res.send(`${text}\n${studs.join('\n')}`);
  } catch (error) {
    res.send(`${text}\n${error.text}`);
  }
});

app.listen(port);

module.exports = app;