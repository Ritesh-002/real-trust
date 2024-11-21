import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slices/authSlice.js"; // Assuming you have an authSlice

const SignupForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        designation: "",
        review: "",
        password: "",
        thumbnail: null,
    });
    const dispatch = useDispatch();

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData({ ...formData, thumbnail: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatch the signup action with the form data
        dispatch(createAccount(formData));
        navigate('/')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Sign Up
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Avatar Section */}
                    <div className="flex justify-center mb-4">
                        <label
                            htmlFor="thumbnail"
                            className="relative cursor-pointer"
                        >
                            <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center shadow-md border-2 border-gray-300">
                                {formData.thumbnail ? (
                                    <img
                                        src={formData.thumbnail}
                                        alt="Avatar"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span className="text-gray-500 text-sm">
                                        Choose Image
                                    </span>
                                )}
                            </div>
                            <input
                                type="file"
                                id="thumbnail"
                                accept="image/*"
                                className="hidden"
                                onChange={handleAvatarChange}
                            />
                        </label>
                    </div>

                    {/* Other Form Fields */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@domain.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="designation"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Designation
                        </label>
                        <input
                            type="text"
                            id="designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder="Designation"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="review"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Review
                        </label>
                        <textarea
                            id="review"
                            name="review"
                            value={formData.review}
                            onChange={handleChange}
                            placeholder="Write your review..."
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to={"/login"}
                        className="text-blue-600 hover:underline focus:outline-none"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
