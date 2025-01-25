
import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{
    const [loginBtn, setloginBtn] = useState("Login");
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus()
    const onlineButton = <button id="online-status-button"></button>
    const offlineButton = <button id="offline-status-button"></button>
    const {loggedInUser} = useContext(UserContext);

    //Subscribing to Store Using Selector

    const cartItems = useSelector((store)=> store.cart.items)
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={require("../../images/app-logo.png")} alt="Logo Image not Found" />
            </div>
            
            <div className="nav-items">
            
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart[{cartItems.length}]</Link></li>
                    <li>
                        <Link to="/groceries">Groceries</Link>
                    </li>
                    <button className="login-btn" onClick={()=>{
                        if(loginBtn==="Login"){
                            setloginBtn("Logout")
                        }
                        else{
                            setloginBtn("Login")
                        }
                        
                    }
                    }>{loginBtn}</button>
                    <li>
                        
                        {onlineStatus ? onlineButton : offlineButton}
                    </li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;