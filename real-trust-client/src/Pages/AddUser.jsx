import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../Redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";

const AddNewUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fullName: "",
        designation: "",
        descriptionReview: "",
        password: "",
        email: "",
        thumbnail: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlethumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserData((prevData) => ({
                ...prevData,
                thumbnail: URL.createObjectURL(file),
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can dispatch a Redux action or make an API call
        let formData = new FormData();
        formData.append('fullName', userData.fullName);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('descriptionReview', userData.descriptionReview);
        formData.append('designation', userData.designation);
        // if(userData.thumbnail) formData.append('thumbnail', userData.thumbnail);

        // Dispatch the action or make the API call
        dispatch(addNewUser(formData));
        // dispatch(addNewUser(userData))
        navigate('/')
        console.log("User Data Submitted:", userData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Create Account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* thumbnail Avatar */}
                    <div className="flex justify-center mb-4">
                        <label
                            htmlFor="thumbnail"
                            className="cursor-pointer"
                        >
                            <div className="h-24 w-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                {userData.thumbnail ? (
                                    <img
                                        src={userData.thumbnail}
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-white text-xl">+</span>
                                )}
                            </div>
                            <input
                                type="file"
                                id="thumbnail"
                                name="thumbnail"
                                accept="thumbnail/*"
                                className="hidden"
                                onChange={handlethumbnailChange}
                            />
                        </label>
                    </div>

                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={userData.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    {/* Designation */}
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
                            value={userData.designation}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Designation"
                            required
                        />
                    </div>

                    {/* Review */}
                    <div>
                        <label
                            htmlFor="descriptionReview"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Review
                        </label>
                        <textarea
                            id="descriptionReview"
                            name="descriptionReview"
                            value={userData.descriptionReview}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your review..."
                            required
                        ></textarea>
                    </div>

                    {/* Email */}
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
                            value={userData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="example@domain.com"
                            required
                        />
                    </div>

                    {/* Password */}
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
                            value={userData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewUser;
