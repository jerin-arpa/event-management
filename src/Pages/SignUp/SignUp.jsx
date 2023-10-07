import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);


        setSignUpError('');
        setSuccess('');


        if (password.length < 6) {
            setSignUpError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Your password must contain one capital letter');
            return;
        }
        else if (!/[\W_]/.test(password)) {
            setSignUpError('Your password must contain a special character');
            return;
        }
        else if (!accepted) {
            setSignUpError('Please accept our terms and conditions');
            return;
        }

        createUser(email, password)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="flex justify-center my-14 ">
                <div className="bg-cyan-950 rounded-lg w-full md:w-3/4 lg:w-1/3 p-8">
                    <h2 className="text-3xl font-bold text-center pt-7 pb-5">SignUp your account</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />
                            <div className="relative flex justify-end">
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-4 right-4">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>


                            <div>
                                {
                                    signUpError && <p className="text-red-400 text-sm mt-2">{signUpError}</p>
                                }
                            </div>
                        </div>

                        <div className="flex gap-3 mt-5">
                            <input type="checkbox" name="terms" id="" />
                            <label htmlFor="terms">Accept our terms and conditions</label>
                        </div>

                        <div>
                            {
                                success && <p className="text-green-500 text-xl font-bold text-center">{success}</p>
                            }
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>

                    <div className="flex justify-center mb-4">
                        <h2>Already have an account? <Link to='/login' className="text-amber-600 underline font-bold">Login</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;