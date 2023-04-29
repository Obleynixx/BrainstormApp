const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/user');
const mongoDBConnectionString = 'mongodb://127.0.0.1:27017/Users';


//Express
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Bcrypt
const saltRounds = 10;
async function hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (err) {
      console.error(err);
    }
  }

mongoose.connect(mongoDBConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

//Routes
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPass = await hashPassword(password);
        const user = new User({ name, email, password:hashedPass});
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


app.get('/api', (req, res) => {
    res.send("Hello World!");
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if (err) {
                res.status(500).json({ message: 'Server error', err });
            } else {
              if (result) {
                res.status(200).json({ message: 'You have been authenticated' });
              } else {
                res.status(401).json({ message: 'User has not been authenticated' });
              }
            }
          });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});