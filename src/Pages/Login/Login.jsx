import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Location in the login page', location);
    const [loginError, setLoginError] = useState('');


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setLoginError('Invalid email or password. Please try again.');
            })
    }


    return (
        <div>
            <div className="flex justify-center my-14 ">
                <div className="bg-cyan-950 rounded-lg w-full md:w-3/4 lg:w-1/3 p-8">
                    <h2 className="text-3xl font-bold text-center pt-7 pb-5">Login your account</h2>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div>
                            {
                                loginError && <p className="text-red-500 text-xl text-center">{loginError}</p>
                            }
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>


                    <div className="flex justify-center mb-4">
                        <h2>Do not have an account? <Link to='/signup' className="text-amber-600 underline font-bold">SignUp</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;