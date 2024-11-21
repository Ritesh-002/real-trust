import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../Redux/Slices/projectSlice";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
    const [projectImage, setProjectImage] = useState(null);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProjectImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectData = {
            name: projectName,
            description: projectDescription,
            thumbnail: projectImage,
        };
        console.log("Project Data: ", projectData);
        // Dispatch action or API call to save the project data
        dispatch(createProject(projectData))
        navigate('/')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Add New Project
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Avatar Section */}
                    <div className="flex flex-col items-center">
                        <label
                            htmlFor="projectImage"
                            className="w-40 h-24 bg-gray-200 border border-dashed border-gray-400 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-300"
                        >
                            {projectImage ? (
                                <img
                                    src={projectImage}
                                    alt="Project"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            ) : (
                                <span className="text-gray-600">
                                    Click to upload image
                                </span>
                            )}
                        </label>
                        <input
                            type="file"
                            id="projectImage"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>

                    {/* Project Name */}
                    <div>
                        <label
                            htmlFor="projectName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Project Name
                        </label>
                        <input
                            type="text"
                            id="projectName"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder="Enter project name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Project Description */}
                    <div>
                        <label
                            htmlFor="projectDescription"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Project Description
                        </label>
                        <textarea
                            id="projectDescription"
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            placeholder="Enter project description"
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Add Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;
