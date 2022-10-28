import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseDetails = () => {
    const data = useLoaderData([])
    const { id, image_url, title, details } = data

    const options = {
        orientation: 'landscape',
        unit: 'in',

    };

    return (
        <div>
            <div className='flex-row lg:flex  align-middle justify-center'>
                <h1 className='text-center text-5xl font-extrabold mt-10  '>{title}</h1>
                <Pdf targetRef={ref} filename="details.pdf" options={options} x={.5} y>
                    {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary mt-10 ml-48">Download Pdf</button>}
                </Pdf>

            </div>
            <div className="card card-compact  bg-base-100 shadow-xl w-11/12 mx-auto my-20 p-10">
                <img className='w-8/12 rounded-2xl mx-auto' src={image_url} alt="course_img" />
                <div className="card-body">
                    {/* <h2 className="text-center text-5xl font-extrabold my-5">{title}</h2> */}
                    <div className='' ref={ref}>
                        <p className=' text-xl mb-3'>{details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${id}`}><button className="btn btn-primary text-xl mx-auto">Get premium access</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default CourseDetails;