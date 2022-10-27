import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/best-coding-for-intermediate-teens-scaled.jpeg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div >
                        <h1 className="mb-5 text-8xl font-extrabold">Learn to Code</h1>
                        <p className="mb-5 text-2xl ">With the world's largest web developer site.</p>
                        <Link to='/courses'><button className="btn btn-primary text-xl">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;