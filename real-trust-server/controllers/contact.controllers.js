import Contact from '../models/contact.model.js'; // Assuming the model is named 'Contact'
import AppError from '../util/app.error.js';
export const submitContactForm = async (req, res, next) => {
    const { fullName, email, mobileNumber, city, message } = req.body;

    // Validate input fields
    if (!fullName || !email || !mobileNumber || !city || !message) {
        return next(new AppError('All fields are required', 400));
    }

    try {
        // Create a new contact form entry
        const contact = await Contact.create({
            fullName,
            email,
            mobileNumber,
            city,
            message,
        });

        res.status(201).json({
            success: true,
            message: 'Your contact form has been submitted successfully.',
            contact,
        });
    } catch (error) {
        return next(new AppError(error.message || 'Unable to submit the contact form', 500));
    }
};

export const getAllContacts = async (req, res, next) => {
    try {
        // Fetch all contact form submissions
        const contacts = await Contact.find();

        if (contacts.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No contact submissions found.',
            });
        }

        res.status(200).json({
            success: true,
            message: 'All contact submissions fetched successfully.',
            contacts,
        });
    } catch (error) {
        return next(new AppError(error.message || 'Unable to fetch contact submissions', 500));
    }
};
