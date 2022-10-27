import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const data = useLoaderData([])
    const { id, image_url, title, details } = data
    console.log(data)
    return (
        <div className="card card-compact  bg-base-100 shadow-xl w-11/12 mx-auto my-20 p-10">
            <img className='w-8/12 rounded-2xl mx-auto' src={image_url} alt="course_img" />
            <div className="card-body">
                <h2 className="text-center text-5xl font-extrabold my-5">{title}</h2>
                <p className='text-xl mb-3'>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${id}`}><button className="btn btn-primary text-xl mx-auto">Get premium access</button></Link>

                </div>
            </div>
        </div>
    )
};

export default CourseDetails;