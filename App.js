import React from "react"
import ReactDOM from "react-dom/client"

/*Header-
    -Logo
    -Nav Item
Body
    -Search Bar
    -RestoContainer
        -Resto Cards horizontally and vertically
        -image, name, rating, cuisine, deliveryTime
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
            <div className="search-bar">Search</div>
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

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

const BelowHeader = () =>{
    return (
        <div className="below-header">
            <div className="header-logo">
                <img className="h-logo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png" alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png" alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png" alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png" alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png" alt="Unloaded"/>
            </div>
        </div>
    );
}

const RestoCard = () =>{
    return (
        <div className="card-container">
            
        <div className="resto-card">
            
            <img className = "resto-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552" alt="Unloaded"></img>
            <div className="content">
                <h3>Subway</h3>
            </div>
            
        </div>
        <div className="resto-card">
            <img className = "resto-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552" alt="Unloaded"></img>
            <div className="content">
                <h3>Subway</h3>
            </div>
            
        </div>
        <div className="resto-card">
            <img className = "resto-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552" alt="Unloaded"></img>
            <div className="content">
                <h3>Subway</h3>
            </div>
            
        </div>
        <div className="resto-card">
            <img className = "resto-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552" alt="Unloaded"></img>
            <div className="content">
                <h3>Subway</h3>
            </div>
            
        </div>
        </div>
        
        
    );
}
const Body = () =>{
    return (
        <div className = "body">
            <div className="heading2"><h2 className="heading-2">Restaurant Chain in Deoria</h2></div>
            <div className="resto-container">
                <RestoCard />
            </div>
        </div>
    )
}
const AppLayout = () =>{

    return (
        <div className= "app">
            <Header />
            <div className="container">
            
            <BelowHeader/>
            <Body />
            </div>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);