import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from '../../Helper/axiosInstance.js'
const initialState = {
    allUsers: [],
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    roles: localStorage.getItem('role') || "",
    data: JSON.parse(localStorage.getItem('data')) || {},  // to do parsing or not
}

export const createAccount = createAsyncThunk(
    '/auth/signup',
    async (data) => {
        try {
            console.log('before axios all')
            const res = axiosInstance.post('/users/signup', data); // No need to specify the full URL, just the endpoint
            console.log(res)
            toast.promise(res, {
                loading: 'Wait we are creating your account...',
                success: (data) => { return data?.data?.message },
                error: 'Failed to create account'
            });
            console.log(res)
            return (await res).data;
        } catch (error) {
            toast.error(error?.response?.data?.message);
            throw error; // Rethrow the error to let the caller handle it
        }
    }
);
export const addNewUser = createAsyncThunk(
    '/auth/add',
    async (data) => {
        try {
            console.log('before axios all')
            const res = axiosInstance.post('/users/add-user', data); // No need to specify the full URL, just the endpoint
            console.log(res)
            toast.promise(res, {
                loading: 'Wait we are adding user...',
                success: (data) => { return data?.data?.message },
                error: 'Failed to create user'
            });
            console.log(res)
            return (await res).data;
        } catch (error) {
            toast.error(error?.response?.data?.message);
            throw error; // Rethrow the error to let the caller handle it
        }
    }
);

export const loginAccount = createAsyncThunk(
    '/auth/login',
    async (data) => {
        try {
            console.log('before axios all')
            const res = axiosInstance.post('/users/login', data); // No need to specify the full URL, just the endpoint
            console.log(res)
            toast.promise(res, {
                loading: 'logging you in...',
                success: 'success login',
                error: 'user login failed'
            });
            console.log(res)
            return (await res).data;
        } catch (error) {
            toast.error(error?.response?.data?.message);
            throw error; // Rethrow the error to let the caller handle it
        }
    }
);

export const logout = createAsyncThunk('/auth/logout', async () => {
    try {
        const res = axiosInstance.post('/users/logout');
        toast.promise(res, {
            loading: 'logout in progress..',
            success: (data) => {
                console.log('logout toast success callback')
                return data?.data?.message
            },
            // error: 'failed to logout'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        // throw error;
    }
})
export const sendContactData = createAsyncThunk('/contact/send', async (data) => {
    try {
        const res = axiosInstance.post('/contact', data);
        toast.promise(res, {
            loading: 'contact in progress..',
            success: (data) => {
                console.log('logout toast success callback')
                return data?.data?.message
            },
            // error: 'failed to logout'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        // throw error;
    }
})
export const getAllContacts = createAsyncThunk('/contact/get', async (data) => {
    try {
        const res = axiosInstance.get('/contact');
        toast.promise(res, {
            loading: 'contact fetching in progress..',
            success: (data) => {
                console.log('logout toast success callback')
                return data?.data?.message
            },
            // error: 'failed to logout'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        // throw error;
    }
})
export const subscribeLetter = createAsyncThunk('/subscribe/post', async (data) => {
    try {
        console.log(data)
        const res = axiosInstance.post('/users/subscribe-newsletter', data);
        toast.promise(res, {
            loading: 'subscribing',
            success: (data) => {
                console.log('logout toast success callback')
                return data?.data?.message
            },
            // error: 'failed to logout'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        // throw error;
    }
})
export const getAllSubscriptionEmails = createAsyncThunk('/subscriptionEmails/get', async (data) => {
    try {
        console.log(data)
        const res = axiosInstance.get('/users/all-subscription-emails');
        toast.promise(res, {
            loading: 'fetching all emails',
            success: (data) => {
                console.log('logout toast success callback')
                return data?.data?.message
            },
            // error: 'failed to logout'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        // throw error;
    }
})

export const getAllUsers = createAsyncThunk('/auth/', async () => {
    try {
        const res = axiosInstance.get('/users/')
        toast.promise(res, {
            loading: "fetching all users",
            success: (data) => {
                console.log(' toast success callback', data)
                return data?.data?.message
            },
            error: 'failed to fetch users'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAccount.fulfilled, (state, action) => {
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('role', action?.payload?.user?.role)
                localStorage.setItem('data', JSON.stringify(action?.payload?.user))
                state.isLoggedIn = true;
                state.roles = action?.payload?.user?.role;
                state.data = action?.payload?.user;
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.data = {}
                state.isLoggedIn = false;
                state.roles = ''
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                console.log('payload', action.payload)
                state.allUsers = action.payload.users.slice()
            })
            .addCase(createAccount.fulfilled, (state, action) => {
                // Save necessary data in localStorage
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('roles', action.payload.user.roles);
                localStorage.setItem('data', JSON.stringify(action.payload.user));
    
                // Update Redux state
                state.isLoggedIn = true;
                state.roles = action.payload.user.roles;
                state.data = action.payload.user;
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                // Here, the new user is added to the users list
                state.users.push(action.payload);
            });
    }
})

export const { } = authSlice.actions;
export default authSlice.reducer;