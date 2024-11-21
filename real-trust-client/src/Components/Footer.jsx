import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { subscribeLetter } from '../Redux/Slices/authSlice'

const Footer = () => {
    const {data} = useSelector((state) => state.auth)
    const [subscriptionEmail, setSubscriptionEmail] = useState('');
    const dispatch = useDispatch()
    const email = data.email;
    const handleSubscriptionEmailClick = (email, subscriptionEmail) => {
        console.log('email', email)
        console.log('subscriptionEmail', subscriptionEmail)
        dispatch(subscribeLetter({email, subscriptionEmail}))
        setSubscriptionEmail('')
    }
    return (
        <div>
            <div className=' bg-cover h-60 text-center flex flex-col items-center gap-4' style={{
                backgroundImage: 'url(/src/assets/Rectangle.png', backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% transparency
                backgroundBlendMode: 'overlay',
            }}>
                <p className='font-bold w-1/2 pt-[5rem] text-xl text-white'>Learn more about our listing process, as well as our additional staging and design work</p>
                <button className='bg-white text-blue-600 px-[1.5rem] py-[0.5rem] rounded-md'>Learn more</button>
            </div>
            <div className='flex items-center h-28 px-[1rem] justify-around bg-blue-600 font-semibold text-white'>
                <div className='flex gap-7'>
                    <Link className="" to={'/home'}>Home</Link>
                    <Link className="" to={'/admin-panel'}>Services</Link>
                    <Link className="" to={'/home'}>Projects</Link>
                    <Link className="" to={'/testimonals'}>Testimonals</Link>
                    <Link className="" to={'/contact'}>Contact</Link>
                </div>
                <div className='flex gap-6 items-center'>
                    <p>Subscribe me</p>
                    <div className='flex '>
                        <input
                            value={subscriptionEmail}
                            onChange={(e) => setSubscriptionEmail(e.target.value)}
                            type="text"
                            id="subscriptionEmail"
                            name="subscriptionEmail"
                            placeholder='Email'
                            className='bg-blue-600 py-[0.5rem] border-t-2 border-l-2 border-white focus:outline-none px-[1.5rem]'
                        />
                        <button onClick={() => handleSubscriptionEmailClick(email, subscriptionEmail)} className='bg-white h-12 text-blue-600 px-[1.5rem] py-[0.5rem]'>send</button>
                    </div>
                </div>
            </div>
            <div className='bg-black text-white flex items-center h-24 justify-around'>
                <p>&copy; 2024 Real Trust. All rights reserved.</p>
                <div>
                    <img className='scale-50' src={logo} alt="" />
                </div>
                <div className='flex items-center gap-2'>
                    <div className='h-6 rounded-full p-1 w-6 bg-white'>
                        <img src="\src\assets\Frame.png" alt="" />
                    </div>
                    <div className='h-6 rounded-full w-6 p-1 bg-white'>
                        <img src="\src\assets\Group-1.png" alt="" />
                    </div><div className='h-6 rounded-full p-1 w-6 bg-white'>
                        <img src="\src\assets\Linkedin.png" alt="" />
                    </div><div className='h-6 rounded-full p-1 w-6 bg-white'>
                        <img src="\src\assets\Group.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer