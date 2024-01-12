// dependecies 
const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// application 
const app = express()

// Routes 
const origine = require('./routes/OrigineRoute')
const plat = require('./routes/platRoute')


// Swagger

const swaggerOptions = {
definition: {
    openapi: '3.0.0',
    info: {
    title: 'My API',
    version: '1.0.0',
    description: 'A sample API for learning Swagger',
    },
    servers: [
    {
        url: 'http://localhost:3000',
    },
    ],
},
apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

