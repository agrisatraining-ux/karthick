import React, { useState, useEffect, useRef } from "react";
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import relogo from '../../assets/relogo.jpeg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const phoneNumber = "919840600638";
    const message = "Hi, I am interested in your services!";

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

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
                <NavLink to='/' end>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to="/work">Workshop</NavLink>
                <NavLink to='/gallery'>Gallery</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </div>

            <div className="navhalf">
                <div className="navmenu">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {menuOpen && (
                  <>
                    <div className="mobileinside"> </div>
                    <div className="mobilemenu" ref={menuRef}>
                        <NavLink className="mobilelink" to='/' end onClick={() => setMenuOpen(false)}>Home</NavLink>
                        <NavLink className="mobilelink" to='/about' onClick={() => setMenuOpen(false)}>About</NavLink>
                        <NavLink className="mobilelink" to='/work' onClick={() => setMenuOpen(false)}>Workshop</NavLink>
                        <NavLink className="mobilelink" to='/gallery' onClick={() => setMenuOpen(false)}>Gallery</NavLink>
                        <NavLink className="mobilelink" to='/Contact' onClick={() => setMenuOpen(false)}>Contact</NavLink>
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
