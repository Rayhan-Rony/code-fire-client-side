
import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../context/AuthProvider';

const Register = () => {
    const { createUser, verifyEmail, updateUserProfile } = useContext(AuthContext)

    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photo)
                handleEmailVerification()
                toast.success('Check Your Mail for verification')

            })
            .catch(error => setError(error.message))


    }

    const handleUpdateUserProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => setError(error.message))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => setError(error.message))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="hero-content flex-col lg:flex-row-reverse w-1/2 mx-auto">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-28">
                    <h1 className="text-3xl font-bold text-center">Register Now</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />

                        </div>
                        <div className='text-red-400'>
                            <p>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            {/* <input type="submit" value="REGISTER" /> */}
                            <button type='submit' className="btn btn-primary">Register</button>

                        </div>


                    </div>
                </div>
            </div>
        </form>

    );
};

export default Register;