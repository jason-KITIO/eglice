const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request body

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'paroisse'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO `email` (`email`) VALUES (?);"
    const values = [
        req.body.email,
    ]
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get('/emails', (req, res) => {
    const sql = 'SELECT * FROM email';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.delete('/email/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `email` WHERE `id` = ?";
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Email not found" });
        }
        return res.status(200).json({ message: "Email deleted successfully" });
    });
});

app.post('/event', (req, res) => {
    const { title, date, description } = req.body;

    const sql = "INSERT INTO `events` (`title`, `date`, `description`) VALUES (?, ?, ?);"
    const values = [title, date, description];

    db.query(sql, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});


// Récupérer tous les événements
app.get('/events', (req, res) => {
    const sql = 'SELECT * FROM events';

    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening...")
})