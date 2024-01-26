import '../index.css'
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="flex px-5 sticky top-0 items-center border-2 justify-center h-20 backdrop-blur-sm">
                <ul className="flex justify-around w-1/2 uppercase">
                    <li className="text-slate-500 px-5 py-3 rounded-md hover:bg-slate-200 hover:text-teal-500">
                        <Link className="text-slate-500 cursor-pointer" to="Hero" smooth="true" duration="500">Home</Link>
                    </li>
                    <li className="text-slate-500 px-5 py-3 rounded-md hover:bg-slate-200 hover:text-teal-500">
                        <Link className="text-slate-500 cursor-pointer" to="Resume" smooth="true" duration="500">Resume</Link>
                    </li>
                    <li className="text-slate-500 px-5 py-3 rounded-md hover:bg-slate-200 hover:text-teal-500">
                        <Link className="text-slate-500 cursor-pointer" to="Projects" smooth="true" duration="500">Projects</Link>
                    </li>
                    <li className="text-slate-500 px-5 py-3 rounded-md hover:bg-slate-200 hover:text-teal-500">
                        <Link className="text-slate-500 cursor-pointer" to="Contact" smooth="true" duration="500">Contact</Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;