// dependecies 
const express = require('express')

// application 
const app = express()

// Routes 
const origine = require('./routes/OrigineRoute')
const plat = require('./routes/platRoute')


// route midlleware 
app.use(express.json())
app.use('/origine', origine)
app.use('/plat', plat)
app.use('/*', (req, res) => {
    return res.status(404).json({
        success : false,
        message: 'Page Not Found !'
    })
})


module.exports = app

