import React from "react"
import ReactDOM from "react-dom/client"

/*Header-
    -Logo
    -Nav Item
Body
    -Search Bar
    -RestoContainer
        -Resto Cards horizontally and vertically
Footer
    -Links
    -copyright
    -contacts

*/


const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={require("./images/app-logo.png")} alt="Logo Image not Found" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contacts</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout = () =>{

    return (
        <div className= "app">
            <Header />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
