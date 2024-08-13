import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import userModel from '../model/userModel.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input fields
        if (!username || !email || !password) {
            return res.json({ status: false, message: "Please provide all required fields." });
        }

        // Check for existing user
        const alreadyExists = await userModel.findOne({ $or: [{ email: email }, { username: username }] });
        if (alreadyExists) {
            return res.json({ status: false, message: "User already exists!" });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new userModel({
            username: username,
            email: email,
            password: hashPassword
        });

        // Save user to database
        await newUser.save();
        return res.json({ status: true, message: "Your registration was successful!" });
    } catch (err) {
        if (err.code == 11000) {
            return res.json({ status: false, message: "User already exists!" });
        }
        return res.json({ status: false, message: err.message });
    }
});

// Signin route
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input fields
        if (!email || !password) {
            return res.json({ status: false, message: "Please provide both email and password." });
        }

        // Check if user exists
        const userExists = await userModel.findOne({ email: email });
        if (!userExists) {
            return res.json({ status: false, message: "User not authorized!" });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, userExists.password);
        if (!passwordMatch) {
            return res.json({ status: false, message: "Wrong email or password!" });
        }

        // Generate JWT token
        const token = jwt.sign({ _id: userExists._id }, process.env.JWT_KEY, { expiresIn: '24h' });

        // Set cookie with token
        res.cookie('isLoggedIn', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // Example: 1 day

        return res.json({ status: true, message: "You logged in successfully!" });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
});

// Forgot password route
router.post('/forgot', async (req, res) => {
    try {
        const { email } = req.body;

        // Check if user exists
        const userExists = await userModel.findOne({ email: email });
        if (!userExists) {
            return res.json({ status: false, message: "User does not exist!" });
        }

        // Generate token for password reset
        const newToken = jwt.sign({ email: userExists.email }, process.env.JWT_KEY, { expiresIn: '5m' });

        // Email configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASS,
            },
        });

        // Send password reset link
        const info = await transporter.sendMail({
            from: 'your-email@gmail.com',
            to: email,
            subject: "Reset Password",
            text: `http://localhost:5173/reset/${newToken}`,
        });

        console.log("Message sent: %s", info.messageId);
        return res.json({ status: true, message: "Password reset link sent to your email." });
    } catch (error) {
        return res.json({ status: false, message: error.message });
    }
});

// Reset password route
router.post('/reset/:token', async (req, res) => {
    try {
        const { password, token } = req.body;

        // Verify JWT token
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        if (!decodedToken) {
            return res.status(403).json({ status: false, message: "Invalid or expired token!" });
        }

        // Hash new password
        const hashPassword = await bcrypt.hash(password, 10);

        // Update user's password
        await userModel.findByIdAndUpdate(decodedToken._id, { password: hashPassword });

        return res.json({ status: true, message: "Password updated successfully!" });
    } catch (err) {
        return res.status(403).json({ status: false, message: "Something went wrong!" });
    }
});

// Verify route
router.get('/verify', async (req, res) => {
    try {
        const token = req.cookies.isLoggedIn;

        // Check if token exists
        if (!token) {
            return res.json({ status: false, message: "Please login and try again!" });
        }

        // Verify JWT token
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        if (!decodedToken) {
            return res.json({ status: false, message: "JWT Expired!" });
        }

        // Find user by decoded token
        const user = await userModel.findById(decodedToken._id);
        if (!user) {
            return res.json({ status: false, message: "User does not exist!" });
        }

        return res.json({ status: true, message: "User authorized!" });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
});

export { router as userAuthRouter };
