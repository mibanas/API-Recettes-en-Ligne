const server = require('./app')
require('dotenv').config()
require('./config/db')

// Variables envirenements 
const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is running at the port ${port}`);
})