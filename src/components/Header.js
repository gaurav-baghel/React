import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [LoginBtnReact, setLoginBtnReact] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Help</Link></li>
            <li>Sign In</li>
            <li>Cart</li>
            <button className="login-btn"
              onClick={()=>{
                LoginBtnReact === "Login" ? setLoginBtnReact("Logout") : setLoginBtnReact("Login") ;
              }}
            >{LoginBtnReact}
            </button>
          </ul>
        </div>
      </div>
    )
  
}

export default Header;