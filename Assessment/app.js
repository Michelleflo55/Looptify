const express = require ('express')
const app = express()
const cors = require('cors')
const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', AppRouter)
app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.listen(PORT, () => {console.log(`Express server listening on port ${PORT}`)})