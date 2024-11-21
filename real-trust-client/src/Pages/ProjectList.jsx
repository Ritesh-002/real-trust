import React, { useEffect } from 'react'
import { getAllProjects } from '../Redux/Slices/projectSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const ProjectList = () => {
    const dispatch = useDispatch();
    const { projectData } = useSelector((state) => state?.project);

    async function loadClients() {
        await dispatch(getAllProjects());
    }

    useEffect(() => {
        loadClients();
    }, []);
    return (
        <div className='flex gap-5 items-center pl-[2.5rem]'>
            {projectData.slice(0, 5).map((project) => {
                return (
                    <div className='flex flex-col border-2 border-black h-60 w-56'>
                        <div className='h-40 w-full bg-sky-100'>

                        </div>
                        <div className='px-[1rem] py-[0.2rem]'>
                            <p>{project.name}</p>
                            <p>{project.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList