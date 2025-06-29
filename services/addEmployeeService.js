const dbConnection = require("../config/db.config");
const bcrypt = require("bcrypt");

async function addEmployeeService(firstName, lastName, email, password) {
  if (!firstName || !lastName || !email || !password) {
    return { status: 400, error: "All fields are required" };
  }
  const existingUser = await dbConnection.query(
    `SELECT * FROM add_employe WHERE email = ?`,
    [email]
  );
  if (existingUser[0].length > 0) {
    return { status: 409, error: "Email already exists" };
  }

  const hash_password = await bcrypt.hash(password, 10);
  try {
    await dbConnection.query(
      `INSERT INTO add_employe (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`,
      [firstName, lastName, email, hash_password]
    );
    return { status: 201, message: "Employee added successfully" };
  } catch (error) {
    if (error) {
      return { status: 409, error: "Email already exists" };
    }
    return { status: 500, error: "Internal server error" };
  }
}

module.exports = { addEmployeeService };
