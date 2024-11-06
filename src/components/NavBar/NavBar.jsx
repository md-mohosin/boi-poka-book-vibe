import { NavLink } from "react-router-dom";


const NavBar = () => {


    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink>Listed Book</NavLink></li>
        <li><NavLink>Page to Read</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-green-500">Sign In</a>
                    <a className="btn bg-blue-400">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;