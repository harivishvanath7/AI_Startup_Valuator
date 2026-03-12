const { registerUser, loginUser } = require("../services/authService");

// User Register
const signup = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({
            message: "User Registered",
            user
        });
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        });
    }
}

// User Login
const login = async (req, res) => {
    try {
        const token = await loginUser(req.body);

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: false
        });

        res.json({ 
            message: "Login Successful",
            token
         });
    } catch (error) {
        res.status(401).json({ 
            message: error.message 
        });
    }
}

// User Logout
const logout = (req, res) => {
    try {
        res.clearCookie("token");
        res.json({
            message: "Logged Out"
        });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = { signup, login, logout };