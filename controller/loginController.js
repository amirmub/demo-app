const { loginUser } = require("../services/loginService");

async function login(req, res) {
  const { email, password } = req.body;
  const result = await loginUser(email, password);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  return res.status(result.status).json({ message: result.message });
}

module.exports = login;
