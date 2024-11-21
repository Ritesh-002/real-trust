import asyncHandler from "../middlewares/asyn.handler.middleware.js";
import Project from "../models/project.model.js";
import fs from 'fs/promises';
import path from 'path';

import cloudinary from 'cloudinary';
import AppError from "../util/app.error.js";
export const getAllProjects = asyncHandler(async (_req, res, next) => {
    // Find all the projects 
    const projects = await Project.find({});

    res.status(200).json({
        success: true,
        message: 'All Projects',
        projects,
    });
});

export const addNewProjects = asyncHandler(async (req, res, next) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return next(new AppError('All fields are required', 400));
    }

    const project = await Project.create({
        name,
        description,
    });

    if (!project) {
        return next(
            new AppError('projects could not be created, please try again', 400)
        );
    }

    // Run only if user sends a file
    if (req.file) {
        try {
            console.log('starting of try')
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'real-trust', // Save files in a folder named real-trust
            });
            console.log('after gettring result', result)
            // If success
            if (result) {
                // Set the public_id and secure_url in array
                project.thumbnail.public_id = result.public_id;
                project.thumbnail.secure_url = result.secure_url;
            }
            console.log('project.thumbnail.public_id', project.thumbnail.public_id)
            console.log('project.thumbnail.secure_url', project.thumbnail.secure_url)
            // After successful upload remove the file from local storage
            fs.rm(`uploads/${req.file.filename}`);
            await project.save()
        } catch (error) {
            // Empty the uploads directory without deleting the uploads directory
            console.log("caught error", error)
            for (const file of await fs.readdir('uploads/')) {
                await fs.unlink(path.join('uploads/', file));
            }
            await project.save();
            // Send the error message
            return next(
                new AppError(
                    JSON.stringify(error) || 'File not uploaded, please try again',
                    400
                )
            );
        }
    }

    // Save the changes
    await project.save();

    res.status(201).json({
        success: true,
        message: 'projects created successfully',
        project,
    });
});

