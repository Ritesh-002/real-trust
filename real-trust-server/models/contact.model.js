import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
    {
        fullName: {
            type: String,
            required: [true, 'Full Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email Address is required'],
            match: [/\S+@\S+\.\S+/, 'Email is not valid'],
        },
        mobileNumber: {
            type: String,
            required: [true, 'Mobile Number is required'],
        },
        city: {
            type: String,
            required: [true, 'City is required'],
        },
        message: {
            type: String,
            required: [true, 'Message is required'],
        },
    },
    {
        timestamps: true, // This will automatically add createdAt and updatedAt fields
    }
);

const Contact = model('Contact', contactSchema);

export default Contact;
