import React, { useEffect } from 'react';
import { getAllUsers } from '../Redux/Slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const HappyClients = () => {
    const dispatch = useDispatch();
    const { allUsers } = useSelector((state) => state?.auth);

    async function loadClients() {
        await dispatch(getAllUsers());
    }

    useEffect(() => {
        loadClients();
    }, []);

    // Random background colors for the circular div
    const bgColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];

    // Filter users with all fields and take only the first 5
    const validUsers = allUsers?.filter(
        (user) => user.fullName && user.designation && user.descriptionReview
    ).slice(0, 5);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Happy Clients</h1>
            <div className="flex justify-center gap-6">
                {validUsers?.map((user, index) => {
                    return (
                        <div
                            key={user.id}
                            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Circular Avatar */}
                            <div
                                className={`h-12 w-12 ${bgColors[index % bgColors.length]} rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4`}
                            >
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                            {/* User Info */}
                            <h2 className="text-lg font-semibold text-center">{user.fullName}</h2>
                            <p className="text-sm text-gray-500 text-center">{user.designation}</p>
                            <p className="text-sm text-gray-700 text-center mt-2">{user.descriptionReview}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HappyClients;
