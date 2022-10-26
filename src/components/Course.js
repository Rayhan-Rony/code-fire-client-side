import React from 'react';

const Course = ({ course }) => {
    const { image_url, title } = course
    console.log(course)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Images" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Course;