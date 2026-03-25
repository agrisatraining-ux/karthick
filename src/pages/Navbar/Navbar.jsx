import React, { useState, useEffect, useRef } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import relogo from '../../assets/relogo.jpeg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const phoneNumber = "919840600638"; // your WhatsApp number with country code
    const message = "Hi, I am interested in your services!";

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <>
        <div className="overallnav">
            <div className="navalleft">
                <div className="navleft">
                    <img src={relogo} alt="" />
                </div>
                <div className="navtitle">
                    <h3>Agrisa Interactive</h3>
                    <h3>Training</h3>
                </div>
            </div>

            <div className="navright">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to="/work">Workshop</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to="/Contact">Contact</Link>
            </div>

            <div className="navhalf">
                {/* Mobile Menu Button */}
                <div className="navmenu">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {menuOpen && (
                  <>
                    <div className="mobileinside"> </div>
                    <div className="mobilemenu" ref={menuRef}>
                        
                        <Link className="mobilelink" to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link className="mobilelink" to='/about' onClick={() => setMenuOpen(false)}>About</Link>
                        <Link className="mobilelink" to='/work' onClick={() => setMenuOpen(false)}>Workshop</Link>
                        <Link className="mobilelink" to='/gallery' onClick={() => setMenuOpen(false)}>Gallery</Link>
                        <Link className="mobilelink" to='/Contact' onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                  
                   </>
                )}

                <div className="navdownload">
                    <Link to="/profile">View Profile</Link>
                </div>
            </div>
        </div>

        {/* WhatsApp float button — outside nav so backdrop-filter doesn't trap fixed position */}
        <div className="whatsapp">
            <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <IoLogoWhatsapp color="white" size={32} />
            </a>
        </div>
        </>
    )
}

export default Navbar;
