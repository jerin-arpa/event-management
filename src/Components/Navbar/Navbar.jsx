import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { GiGuitarBassHead } from 'react-icons/gi';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }


    const navLink = <>
        <li>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-amber-600 underline" : ""
            }>Home</NavLink>
        </li>
        <li>
            <NavLink to='/speakers' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-amber-600 underline" : ""
            }>Speakers</NavLink>
        </li>
        <li>
            <NavLink to='/gallery' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-amber-600 underline" : ""
            }>Gallery</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline text-amber-600" : ""
            }>About</NavLink>
        </li>
    </>



    return (
        <div>
            <div className="navbar container mx-auto px-5 py-7 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className="flex gap-1">
                        <GiGuitarBassHead className="text-3xl text-amber-600"></GiGuitarBassHead>
                        <p className="text-2xl font-extrabold"><span className="text-amber-600">FestCon</span> Management</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-7 px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mr-2">

                        {
                            user ?
                                <div className="flex gap-4">
                                    <div className="dropdown dropdown-end">
                                        <div className="flex gap-3">
                                            <div className="flex items-center">
                                                <h2 className="hidden md:flex">{user.displayName}</h2>
                                            </div>
                                            <label tabIndex={0}>
                                                {
                                                    user.photoURL ? (
                                                        <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                                                    ) : (
                                                        <FaUserCircle className="text-4xl">
                                                        </FaUserCircle>
                                                    )
                                                }
                                            </label>
                                        </div>
                                        <div className="dropdown-content z-[1] menu p-2 shadow bg-slate-800 rounded-box lg:w-96">
                                            <div className="p-3">
                                                <div className="flex justify-center">
                                                    {
                                                        user.photoURL ? (
                                                            <img className="rounded-full w-24" src={user.photoURL} alt="" />
                                                        ) : (
                                                            <FaUserCircle className="text-7xl">
                                                            </FaUserCircle>
                                                        )
                                                    }
                                                </div>
                                                <div className="flex justify-center">
                                                    <hr className="my-7 w-1/2" />
                                                </div>
                                                <div className="text-center">
                                                    <h2 className="text-lg lg:text-2xl mb-2 text-white"><span className="text-amber-600">Name:</span> {user.displayName
                                                    }</h2>
                                                    <p className="lg:text-lg mb-5 text-white"><span className="text-amber-600">Email:</span> {user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to='/login' className="flex items-center">
                                        <button onClick={handleSignOut} className="bg-amber-600 border-0 text-white p-2 rounded-lg"><LuLogOut></LuLogOut></button>
                                    </Link>
                                </div>
                                :
                                <>
                                    <Link to='/login'>
                                        <button className="bg-amber-600 border-0 text-white p-3 px-4 rounded-lg">Login</button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;