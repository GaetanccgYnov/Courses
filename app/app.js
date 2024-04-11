const express = require('express');
const mongoose = require('mongoose')
const User = require('./users')

mongoose.Promise = Promise
mongoose.connect('mongodb+srv://root:1n4nGTkqOwSbJ6aV@nosql.eibwjpm.mongodb.net/nosoukele', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error: "))
db.once('open', () => console.log('status :', db.states[db._readyState]))

const app = express();
app.use(express.json())
app.use(express.urlencoded())

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  next();
})

app.post('/', async (req,res) => {
    try {
        const { _id, nom, email, mot_de_passe, devise, langue } = req.body
        console.log('Received data:', req.body) // Log the received data
        const user = await User.create({
            utilisateurs: [{
                _id: _id,
                nom: nom,
                email: email,
                mot_de_passe: mot_de_passe,
                date_inscription: new Date(),
                preferences: {
                    devise: devise,
                    langue: langue
                }
            }]
        })
        console.log('Created user:', user) // Log the created user
        res.json(user)
    } catch (error) {
        console.error('Error occurred:', error) // Log any error that occurred
        res.status(500).json({ error: 'An error occurred while creating the user' })
    }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
