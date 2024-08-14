const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/eduhub', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    completedModules: Array,
    currentModule: String,
});

const User = mongoose.model('User', userSchema);

app.get('/api/progress', (req, res) => {
    User.findOne({ username: req.query.username }, (err, user) => {
        if (err) return res.status(500).send(err);
        res.json({
            completed: user.completedModules.length,
            current: user.currentModule,
            next: "Module 3"
        });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
