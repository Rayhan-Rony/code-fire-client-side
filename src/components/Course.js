import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, image_url, title } = course
    // console.log(course)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Images" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/coursedetails/${id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Course;