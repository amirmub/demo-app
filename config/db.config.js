const mysql2 = require("mysql2")

const dbConnection = mysql2.createPool({
    database: process.env.DB_DATABASE ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    host : process.env.DB_HOST ,
    connectionLimit: 10
})

module.exports = dbConnection.promise()