const dbConnection = require("../config/db.config");
const bcrypt = require("bcrypt");

async function loginUser(email, password) {
  if (!email || !password) {
    return { status: 400, error: "All fields are required" };
  }

  try {
    const [results] = await dbConnection.query(
      "SELECT * FROM add_employe WHERE email = ?",
      [email]
    );

    if (results.length === 0) {
      return { status: 404, error: "User not found" };
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { status: 401, error: "Incorrect password" };
    }

    return { status: 200, message: "Login successful", user };

  } catch (err) {
    return { status: 500, error: "Internal server error" };
  }
}

module.exports = {
  loginUser,
};

