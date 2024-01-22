//require client from pg
const { Client } = require('pg')

//establish the connection to the datatbase 
const client = new Client(`https://localhost:5432/powderplanner`)

//export for use in other files
module.exports = client;