import React, { useState } from 'react'
import firstSectionImage from '../assets/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg'
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { sendContactData } from '../Redux/Slices/authSlice';
const SectionOne = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
        mobileNumber: '',
        city: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input fields
        if (
            !formData.fullName ||
            !formData.email ||
            !formData.message ||
            !formData.mobileNumber ||
            !formData.city
        ) {
            toast.error('Please fill out all fields.');
            return;
        }

        try {
            await dispatch(sendContactData(formData)).unwrap(); // Dispatch the thunk
            setFormData({
                fullName: '',
                email: '',
                message: '',
                mobileNumber: '',
                city: '',
            }); // Reset the form on success
        } catch (error) {
            console.error(error); // Log errors if any
        }
    };
    return (
        <div className='px-[1rem]'>
            <Toaster/>
            <div className='h-[500px] px-[2rem] flex items-center justify-around'
                style={{ backgroundImage: `url(${firstSectionImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-white font-bold text-5xl w-1/3'>Consultation, Design and marketing</h1>
                <div className='flex flex-col rounded-md opacity-80 w-1/4 text-white bg-blue-900 p-[1.5rem] items-center gap-5'>
                    <p className='text-center font-bold text-2xl'>
                        Get a free Consultation
                    </p>
                    <input
                        type="text"
                        id="name"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className='text-white px-[0.3rem] w-full h-10 bg-blue-900 border-b-2 border-r-2 focus:outline-none border-white rounded-md'
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className='text-white px-[0.3rem] w-full h-10 bg-blue-900 border-b-2 border-r-2 focus:outline-none border-white rounded-md'
                    />
                    <input
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className='text-white px-[0.3rem] w-full h-10 bg-blue-900 border-b-2 border-r-2 focus:outline-none border-white rounded-md'
                    />
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className='text-white px-[0.3rem] w-full h-10 bg-blue-900 border-b-2 border-r-2 focus:outline-none border-white rounded-md'
                    />
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className='text-white px-[0.3rem] w-full h-10 bg-blue-900 border-b-2 border-r-2 focus:outline-none border-white rounded-md'
                    />
                    <button
                        className='bg-orange-500 rounded-md text-white px-[1.5rem] py-[0.5rem]'
                        onClick={handleSubmit}
                    >Get a free Consultation</button>
                </div>
            </div>
        </div>
    )
}

export default SectionOne