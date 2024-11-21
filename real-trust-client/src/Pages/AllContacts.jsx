import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from '../Redux/Slices/authSlice';

const AllContacts = () => {
    const dispatch = useDispatch();
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadContacts = async () => {
            try {
                const result = await dispatch(getAllContacts()).unwrap();
                setContacts([...result.contacts]);
            } catch (error) {
                console.error('Failed to fetch contacts:', error);
                setContacts([]); // Ensure state is not left undefined
            }
        };

        loadContacts();
    }, [dispatch]);

    return (
        <div>
            <h2 className='text-3xl pl-[1rem] font-bold'>All Contacts</h2>
            {contacts.length > 0 ? (
                <ul>
                    {contacts.map((contact, index) => (
                        <li key={index} className='p-[1rem]'>
                            <strong>Name:</strong> {contact.fullName} <br />
                            <strong>Email:</strong> {contact.email} <br />
                            <strong>Message:</strong> {contact.message} <br />
                            <strong>City:</strong> {contact.city} <br />
                            <strong>Mobile:</strong> {contact.mobile} <br />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No contacts available.</p>
            )}
        </div>
    );
};

export default AllContacts;
