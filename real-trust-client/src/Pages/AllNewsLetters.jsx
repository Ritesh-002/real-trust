import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getAllSubscriptionEmails } from '../Redux/Slices/authSlice';

const AllNewsLetters = () => {
    const dispatch = useDispatch();
    const [subscriptionEmail, setSubscriptionEmail] = useState([]);

    useEffect(() => {
        const loadEmails = async () => {
            try {
                const result = await dispatch(getAllSubscriptionEmails()).unwrap();
                console.log('result', result)
                setSubscriptionEmail([...result.subscriptionEmails]);
            } catch (error) {
                console.error('Failed to fetch contacts:', error);
                setSubscriptionEmail([]); // Ensure state is not left undefined
            }
        };

        loadEmails();
    }, [dispatch]);
    return (
        <div>
            <Toaster />
            <h2 className='text-3xl pl-[1rem] font-bold'>All subscription mails</h2>
            {subscriptionEmail.length > 0 ? (
                <ul>
                    {subscriptionEmail.map((subEmail, index) => (
                        <li key={index} className='p-[1rem]'>
                            <p key={index}>{subEmail}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No emails subscribed.</p>
            )}
        </div>
    )
}

export default AllNewsLetters