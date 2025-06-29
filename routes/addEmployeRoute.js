const express = require("express");
const router = express.Router();

const addEmployee = require("../controller/addEmployeeController")
router.post("/add-employee",addEmployee)

module.exports = router
