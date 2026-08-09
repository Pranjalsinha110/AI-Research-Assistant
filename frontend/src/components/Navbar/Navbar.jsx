import { Container } from "react-bootstrap";
import { useState,useEffect } from "react";
import "./Navbar.css";


const Navbar = () => {
const [darkMode, setDarkMode] = useState(true);

const toggleTheme = () => {
   setDarkMode((prev) => !prev);
  
};
 useEffect(() => {
    document.documentElement.setAttribute(
        "data-theme",
        darkMode ? "dark" : "light"
    );
}, [darkMode]);

    return (
        <header className="navbar-section">

            <Container>

                <nav className="navbar-wrapper">

                  
                    <div className="logo">

                        <h2>
                            AI<span> Research Assistant</span>
                        </h2>

                    </div>

                   

                    <ul className="nav-menu">

                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#about">About</a>
                        </li>

                    </ul>

                  <div className="nav-actions">


                     <button className="theme-toggle"  onClick={toggleTheme}>

                     <i className={darkMode ? "bx bx-sun" : "bx bx-moon"}></i>

                     </button>

                    <a
                        href="https://github.com/Pranjalsinha110/"
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                    >
                        <i className='bx bxl-github'></i>
                        GitHub
                    </a>
                 </div>
                </nav>

            </Container>

        </header>
    );
};

export default Navbar;