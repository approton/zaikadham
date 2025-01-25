import {RES_LOGO_URL} from "../utils/constants"

const RestoCard = (props) =>{
    const {resData} = props;
    const { 
      sla, 
      name, 
      avgRating, 
      cuisines, 
      costForTwo,
    } = resData?.info
    const manualHeader= "";
    // console.log(resData.info.name);
    // console.log(resData.info.externalRatings.aggregatedRating.rating);
    // console.log(resData.info.cuisines);
    // const cuisines_data = resData.info.cuisines
    // const cuisines = cuisines_data.join(",");
    // console.log(cuisines);
    return (
        
        <div className="card-container">
            
            
        <div className="resto-card">
            
            <img className = "resto-logo" src={RES_LOGO_URL+resData.info.cloudinaryImageId} alt="Unloaded"></img>
            {/* <div className="text-overlay">{

                // aggregatedDiscountInfoV3.header?(aggregatedDiscountInfoV3.header+" "+aggregatedDiscountInfoV3.subHeader):manualHeader
                aggregatedDiscountInfoV3.header?aggregatedDiscountInfoV3.header:manualHeader
                }</div>
                 */}
            <h4>{name}</h4>
            {/* <h4>{resData.info.externalRatings.aggregatedRating.rating}</h4> */}
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
            
        </div>
        
        {/* <div className="resto-card">
            <img className = "resto-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/8d5d8f49-22b5-47ec-ab3b-7bcfc7a256ec_637321.jpg" alt="Unloaded"></img>
            <div className="content">
                <h4>Pizzahut</h4>
            </div>
            
        </div>
        <div className="resto-card">
            <img className = "resto-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804656.JPG" alt="Unloaded"></img>
            <div className="content">
                <h4>KFC</h4>
                
            </div>
            
        </div>
        <div className="resto-card">
            <img className = "resto-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552" alt="Unloaded"></img>
            <div className="content">
                <h4>Subway</h4>
            </div>
            
        </div> */}
        </div>
        
    );
}

export const withInstaDelivery = (RestoCard) => {
    return (props)=>{
        return (
            <div>
                <label className="w-28 h-10 ml-6 bg-black text-white mt-[12px] absolute z-10 rounded-lg p-1 text-center">insta-Delivery</label>
                <RestoCard {...props}/>
            </div>
        )
    }
}

export default RestoCard;