import {BELOW_HEADER_URL} from "../utils/constants";

const BelowHeader = () =>{
    return (
        <div className="container">
            <h2 className="text-2xl ml-2 font-medium my-2">what's on your mind?</h2>
        <div className="below-header">
            
            <div className="header-logo">
                <img className="h-logo1" src={BELOW_HEADER_URL+"8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png"} alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src={BELOW_HEADER_URL+"6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"} alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src={BELOW_HEADER_URL+"8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png"} alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src={BELOW_HEADER_URL+"6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"} alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src={BELOW_HEADER_URL+"6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png"} alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png" alt="Unloaded"/>
            </div>
            <div className="header-logo">
                <img className="h-logo1" src={BELOW_HEADER_URL+"6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png"} alt="Unloaded"/>
            </div>

        </div>
        </div>
    );
}

export default BelowHeader;