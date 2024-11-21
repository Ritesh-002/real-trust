import { hash, compare } from 'bcrypt'
import User from '../models/user.model.js'
import AppError from '../util/app.error.js';
import asyncHandler from '../middlewares/asyn.handler.middleware.js';

const cookieOptions = {
    secure: process.env.NODE_ENV === 'production' ? true : false,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
};
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return res.status(200).json({
            message: "OK",
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "ERROR:",
            cause: error.message
        })
    }
}

export const signUpUser = async (req, res, next) => {
    // Destructuring the necessary data from req object
    const { fullName, email, password, designation, descriptionReview } = req.body;

    // Check if the user exists with the provided email
    const userExists = await User.findOne({ email });

    // If user exists send the reponse
    if (userExists) {
        return next(new AppError('Email already exists', 409));
    }

    // Create new user with the given necessary data and save to DB
    const user = await User.create({
        fullName,
        email,
        password,
        designation,
        descriptionReview
    });

    // If user not created send message response
    if (!user) {
        return res.status(404).json({
            message: "user not created",
            success: false
        })
    }

    // Run only if user sends a file

    // Save the user object
    await user.save();

    // Generating a JWT token
    const token = await user.generateJWTToken();

    // Setting the password to undefined so it does not get sent in the response
    user.password = undefined;

    // Setting the token in the cookie with name token along with cookieOptions
    res.cookie('token', token, cookieOptions);

    // If all good send the response to the frontend
    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user,
    });
};
export const addNewUser = async (req, res, next) => {
    try {
        // Destructuring the necessary data from req object
        const { fullName, email, password, descriptionReview, designation } = req.body;

        // Check if the user exists with the provided email
        const userExists = await User.findOne({ email });

        // If user exists send the response
        if (userExists) {
            return next(new AppError('Email already exists', 409)); // Requires proper error-handling middleware
        }

        // Create new user with the given necessary data
        const user = await User.create({
            fullName,
            email,
            password,
            descriptionReview,
            designation
        });

        // Remove the password from the response
        user.password = undefined;

        await user.save();
        // Send success response

        res.status(201).json({
            message: "User created successfully",
            success: true,
            user,
        });
    } catch (error) {
        // Handle any errors during user creation
        return next(new AppError(error.message || "Something went wrong", 500));
    }
};


export const loginUser = async (req, res, next) => {
    // Destructuring the necessary data from req object
    const { email, password } = req.body;

    // Finding the user with the sent email
    const user = await User.findOne({ email }).select('+password');

    // If no user or sent password do not match then send generic response
    if (!(user && await (await user.comparePassword(password)))) {
        return res.status(422).json({
            message: "password didn't match",
            success: false
        })
    }

    // Generating a JWT token
    const token = await user.generateJWTToken();

    // Setting the password to undefined so it does not get sent in the response
    user.password = undefined;

    // Setting the token in the cookie with name token along with cookieOptions
    res.cookie('token', token, cookieOptions);

    // If all good send the response to the frontend
    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        user,
    });
};

export const logoutUser = async (req, res, next) => {
    // Setting the cookie value to null
    res.cookie('token', null, {
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 0,
        httpOnly: true,
    });

    // Sending the response
    res.status(200).json({
        success: true,
        message: 'User logged out successfully',
    });
};
// 20-12-2024 = MCS-215
// 23-12-3034 = MCS-212
// 26-12-3034 = MCS-213
export const subscribeEmail = async (req, res, next) => {
    const {subscriptionEmail, email} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(442).json({
                message: "This email does not match with your account",
                success: false
            })
        } else {
            user.subscriptionEmail = subscriptionEmail;
            await user.save()
            return res.status(201).json({
                message: "Email sent successfully",
                success: true
            })
        }
    } catch (error) {
        return res.status(442).json({
            message: error,
            success: false
        })
    }
}

export const getAllSubscriptionEmails = async (req, res, next) => {
    try {
        // Fetch all users with subscriptionEmail field
        const users = await User.find({}, 'subscriptionEmail'); // Only return subscriptionEmail field
        
        // Filter out users without subscriptionEmail
        const subscriptionEmails = users
            .map(user => user.subscriptionEmail)
            .filter(email => email); // Remove undefined or null emails

        res.status(200).json({
            success: true,
            message: "All subscription emails fetched successfully",
            subscriptionEmails,
        });
    } catch (error) {
        return next(new AppError(error.message || "Could not fetch emails", 500));
    }
};
