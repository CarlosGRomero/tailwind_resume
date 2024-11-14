import { useState, useEffect, useRef } from "react";
import logo from "../../assets/romeroLabsLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaBars } from "react-icons/fa";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 mb-20 flex items-center justify-between py-4 text-white bg-gray-900 shadow-lg z-50">
            <div className={`flex flex-shrink-0 items-center pl-4 md:pl-16 lg:pl-8 ${isOpen ? 'hidden' : 'block'}`}>
                <a href="#">
                    <img src={logo} alt="logo" className="h-8 rounded-full" />
                </a>
            </div>
            <div className="block md:hidden pr-4 sm:pr-6">
                {!isOpen && (
                    <button onClick={toggleMenu} className="text-xl">
                        <FaBars />
                    </button>
                )}
            </div>
            <div ref={menuRef} className={`w-full md:flex md:items-center md:justify-end md:gap-4 md:text-xl ${isOpen ? 'block' : 'hidden'} text-right`}>
                {isOpen && (
                    <a href="#" onClick={handleLinkClick} className="block py-2 px-2 md:py-2 md:px-4 md:text-center text-lg">
                        <img src={logo} alt="home" className="h-8 rounded-full inline-block mr-2" />
                    </a>
                )}
                <a href="#technologies" onClick={handleLinkClick} className="block py-2 px-2 md:py-2 md:px-4 md:text-center text-lg">Technologies</a>
                <a href="#experience" onClick={handleLinkClick} className="block py-2 px-2 md:py-2 md:px-4 md:text-center text-lg">Experience</a>
                <a href="#contact" onClick={handleLinkClick} className="block py-2 px-2 md:py-2 md:px-4 md:text-center text-lg">Contact</a>
                <div className="flex flex-col items-end justify-center md:flex-row md:items-center">
                    <a href="https://www.linkedin.com/in/carlos-romero-bb8491115/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className="py-2 px-2 md:py-2 md:px-4 md:inline-block text-lg">
                        <FaLinkedin className="text-xl md:text-lg" />
                    </a>
                    <a href="https://www.instagram.com/carlos_g_romero/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className="py-2 px-2 md:py-2 md:px-4 md:inline-block text-lg">
                        <FaInstagram className="text-xl md:text-lg" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
