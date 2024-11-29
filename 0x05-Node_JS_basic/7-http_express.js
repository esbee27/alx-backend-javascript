const express = require('express');

const app = express();
const port = 1245

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    const message = 'This is the list of our students';
    try {
        const students = await countStudents(databaseFilePath);
        res.send(`${message}\n${students.join('\n')}`);
    }   catch (error) {
        res.send(`${message}\n${error.message}`);
    }
});

app.listen(port);

module.exports = app;