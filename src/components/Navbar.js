import { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";


const brandName = {
    color:'black',
    fontWeight: 800, 
    marginLeft:'2rem', 
    fontSize:'1.8rem',
    marginTop:'.01rem',
}

const navElement = {
    display:'column',
    alignItems:'center', 
    marginTop:'10px', 
    fontWeight:'600',
    border:'solid',
    borderWidth:'1px',
    borderRadius:'5px',
    padding:'5px 5px'
}
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <Typography sx={brandName}>
                HivesAPP
            </Typography>

            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* icon from Heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <Link to="/">
                            <Typography sx={navElement}>
                                Pasieka
                            </Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <Typography sx={navElement}>
                                Ustawienia
                            </Typography>
                        </Link>
                    </li>
                    {/* <li>
            <a href="/info">Info</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li> */}
                </ul>
            </div>
        </nav>
    );
}
