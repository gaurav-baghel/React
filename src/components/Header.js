import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [LoginBtnReact, setLoginBtnReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const contextData = useContext(UserContext);

    return (
      <div className="header flex justify-between shadow-lg sticky">
        <div className="logo-container max-w-36 cursor-pointer">
          <Link to='/home'><img className="logo" src={LOGO_URL}></img></Link>
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex m-4 p-4">
            <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-4"><Link to='/home'>Home</Link></li>
            <li className="px-4"><Link to='/about'>About</Link></li>
            <li className="px-4"><Link to='/contact'>Help</Link></li>
            <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
            <li className="px-4">Sign In</li>
            <li className="px-4">Cart</li>
            <button className="login-btn px-4"
              onClick={()=>{
                LoginBtnReact === "Login" ? setLoginBtnReact("Logout") : setLoginBtnReact("Login") ;
              }}
            >{LoginBtnReact}
            </button>
            <li className="px-4">{contextData.loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  
}

export default Header;