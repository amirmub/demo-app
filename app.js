require("dotenv").config()
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle CORS
app.use(cors());

// add employee  middleware
const addEmployee = require("./routes/addEmployeRoute")
app.use("/api",addEmployee)

// login middleware
const login = require("./routes/loginRoute")
app.use("/api",login)

// db config file
const dbConnection = require("./config/db.config")
async function start() {
    try {
        const result = dbConnection.getConnection();
        app.listen(PORT);
        console.log("db connected");
        console.log(`its listening port http://localhost:${PORT}`);
        // console.log(result)
    } catch (error) {
        console.log(error.message);
        
    }
}
start();