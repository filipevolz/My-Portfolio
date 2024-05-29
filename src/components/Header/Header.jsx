import React, { useState } from "react";
import './header.css'

function Navbar() {
    const [hamburger, setHamburger] = useState(false);

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    };

    const navlinks = [
        { name: "Home", link: "#hero" },
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <nav className="navbar">
            <h3 className="logo">
                <a href="/">FilipeVolz 💻</a>
            </h3>
            <div className="mobile-menu" onClick={hamburgerMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </div>
            <ul className={`menu ${hamburger ? "open" : ""}`}>
                {navlinks.map((item) => (
                    <li className="nav-item" key={item.name} onClick={() => setHamburger(false)}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
