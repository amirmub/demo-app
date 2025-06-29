const { addEmployeeService } = require("../services/addEmployeeService");

async function addEmployee(req, res) {
  const { firstName, lastName, email, password } = req.body;
  
  const result = await addEmployeeService(firstName, lastName, email, password);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  return res.status(result.status).json({ message: result.message });
}

module.exports = addEmployee;
