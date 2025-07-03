import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import "./Navbar.css"
import { useNavigate,Link } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();

    return(
            <div className='navbar'>
      <ArrowBackIosIcon />
      <ul>
        <li><Link className="no-underline" to={"/"}>Home</Link></li>
        <li><Link to={"/problems"} className="no-underline">Problems</Link></li>
        <li><Link className="no-underline">About</Link></li>
        <li><Link className="no-underline">Contact</Link></li>
      </ul>

        <Button 
        color='#000'
        variant="outlined" 
        className='log'
        onClick={() => navigate("/login")}
        >Login/Signup
        </Button>
    </div>
    )
}

export default Navbar 