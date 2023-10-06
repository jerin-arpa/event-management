import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-9xl font-bold text-white mb-5">404</h2>
                    <h4 className="mb-3 text-2xl font-semibold text-white">
                        Oops! That page can’t be found
                    </h4>
                    <p className="mb-8 text-lg text-white">
                        The page you are looking for it maybe deleted
                    </p>
                    <Link to='/'>
                        <button className="btn font-bold btn-outline text-white">GO Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;