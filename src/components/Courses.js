import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const coursesdata = useLoaderData([])

    return (
        <div className='lg:flex w-11/12 mx-auto my-10 md:flex-row'>
            <div className='bg-orange-50 p-20 rounded-md mr-5'>
                {
                    coursesdata.map(cr => <Link key={cr.id} to={`/coursedetails/${cr.id}`}><p className='text-xl font-bold hover:bg-orange-200 p-3 text-center rounded-lg' >{cr.name}</p></Link>)
                }
            </div>
            < div className='grid lg:grid-cols-3 gap-4 w-11/12 mx-auto md:grid-cols-1' >
                {
                    coursesdata.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div ></div>



    );
};

export default Courses;