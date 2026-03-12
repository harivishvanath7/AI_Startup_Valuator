const authService = require("../services/authService");

// User Register
const registerUser = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// User Login
const loginUser = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = { registerUser, loginUser };