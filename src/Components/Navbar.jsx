import '../index.scss'
import MyLogo from '../images/gernale-logo.png'
// eslint-disable-next-line no-unused-vars

const Navbar = () => {
    return (
            <nav className="z-50 w-screen h-20 sticky top-0 flex items-center justify-between py-12 px-40">
                <img src={MyLogo} alt="Logo" className="w-52" />
                <ul className="flex justify-between">
                    <a href="#home"><li className="">Home</li></a>
                    <a href="#about"><li className="">About Me</li></a>
                    <a href="#project"><li className="">Projects</li></a>
                    <a href="#contact"><li className="">Contact</li></a>
                </ul>
            </nav>
    );
}

export default Navbar;