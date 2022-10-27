import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutCourse = useLoaderData([])
    const { price, name } = checkoutCourse

    return (
        <div className="card card-side bg-base-100 shadow-xl lg:w-1/2 md:w-full mx-auto my-16 lg:my-[260px]  text-center">

            <div className="card-body  ">
                <h2 className=" text-2xl font-bold">Course Name: {name}</h2>
                <p className='font-semibold' >Price: {price}</p>

            </div>
        </div>
    );
};

export default Checkout;