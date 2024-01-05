const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    const users = JSON.parse(fs.readFileSync('users.json'));

    if (users[username]) {
        return res.status(400).json({ error: 'Username already exists. Please choose another one.' });
    }

    users[username] = { password };
    fs.writeFileSync('users.json', JSON.stringify(users));

    return res.status(200).json({ message: 'Registration successful!' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const users = JSON.parse(fs.readFileSync('users.json'));

    if (!users[username] || users[username].password !== password) {
        return res.status(401).json({ error: 'Invalid credentials. Please try again.' });
    }

    return res.status(200).json({ message: 'Login successful!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
