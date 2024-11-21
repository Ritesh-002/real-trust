import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../Helper/axiosInstance.js'
import toast from "react-hot-toast";
const initialState = {
    projectData: []
}

export const getAllProjects = createAsyncThunk('auth/projects', async () => {
    try {
        const response = axiosInstance.get('/projects');
        toast.promise(response, {
            loading: 'we are loading projects',
            success: 'projects loaded successfully',
            error: 'unable to fetch projects'
        })
        const res = await response;
        console.log('response', res.data)
        console.log('response.data', res.data)
        console.log('response.data.projects', res.data.projects)
        return res.data.projects;
    } catch (error) {
        // toast.error(error?.response?.data?.message)
    }
})

export const createProject = createAsyncThunk('projects/create', async (data) => {
    try {
        let formData = new FormData()
        formData.append('name', data?.name)
        formData.append('description', data?.description)
        formData.append('thumbnail', data?.thumbnail)
        const response = axiosInstance.post('/projects/add-project', formData);
        toast.promise(response, {
            loading: 'creating project',
            success: 'project created successfully',
            error: 'unable to create project'
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        return;
    }
})


const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProjects.fulfilled, (state, action) => {
            if (action.payload) {
                state.projectData = [...action.payload]
            }
        })
            .addCase(createProject.fulfilled, (state, action) => {
                if (action.payload) {
                    // Add the newly created project to the state
                    state.projectData = [action.payload, ...state.projectData];
                }
            })
    }
})

export const { } = projectSlice.actions;
export default projectSlice.reducer