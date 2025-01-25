import BelowHeader from "./BelowHeader";
import RestoCard, {withInstaDelivery} from "./RestoCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mock-data";
import { Link } from "react-router-dom";
// import { MENU_API } from "../Utils/constants";
// import resList from "../utils/mock-data-l"

import { useState, useEffect, useContext} from "react"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// let restaurant_data=[
//     {
//         "info": {
//           "id": "636723",
//           "name": "Chinese Wok",
//           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//           "locality": "Mahanagar",
//           "areaName": "Mahanagar",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "Chinese",
//             "Asian",
//             "Tibetan",
//             "Desserts"
//           ],
//           "avgRating": 4.3,
//           "parentId": "61955",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "1.2K+",
//           "sla": {
//             "deliveryTime": 32,
//             "lastMileTravel": 6.3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "30-35 mins",
//             "lastMileTravelString": "6.3 km",
//             "iconType": "ICON_TYPE_EMPTY",
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹199"
          
//         }
//     }
// },
// {

//         "info":{
//           "id": "636724",
//           "name": "KFC",
//           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//           "locality": "Mahanagar",
//           "areaName": "Mahanagar",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "Chinese",
//             "Asian",
//             "Tibetan",
//             "Desserts"
//           ],
//           "avgRating": 4.7,
//           "parentId": "61955",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "1.2K+",
//           "sla": {
//             "deliveryTime": 32,
//             "lastMileTravel": 6.3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "30-35 mins",
//             "lastMileTravelString": "6.3 km",
//             "iconType": "ICON_TYPE_EMPTY",
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹199"
//           }
//         }
//     }
    

// ]

const Body = () =>{
    // const [restoList, setRestoList] = useState([]);
    const [restoList, setRestoList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestoList, setFilteredRestoList] = useState([]);
    const InstaDeliveryRestoCard = withInstaDelivery(RestoCard)
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9105218&lng=80.9447196&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.5281418&lng=83.8106684&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json)
        setRestoList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(restaurants);
        setFilteredRestoList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
        return (
        <h1>Looks like you are offline</h1>
        )
    }
    const {loggedInUser, setUserName} = useContext(UserContext)
    // if(restoList.length===0){
    //     return <Shimmer />
    // }

    return restoList.length===0? (
        <Shimmer />
    ):(
        <div className = "body">
            <div className="filter-resto">
            <input type = "text" className="border-2 border-black rounded-md ml-2 w-[300px] h-[35px]" value={searchText} onChange = {(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="search-btn font-medium mx-2  bg-green-400 w-24 h-8 rounded-lg" onClick={()=>{
                    const filteredList = restoList.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestoList(filteredList);
                }
                
                }>
                    Search
                </button>
                <button className="filter-btn font-medium mx-2 bg-green-400 w-24 h-8 rounded-lg" onClick={()=>{
                    const filteredList=restoList.filter((res)=>res.info.avgRating>=4.5);
                    setFilteredRestoList(filteredList);
                }}
                >Top Rated</button>
                <label> User Name: </label>
                <input className="border border-black p-1" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            
            
            <BelowHeader/>
            <div className="resto-container">
                
                {

                  filteredRestoList.map((restaurant) => 
                  <Link 
                  key = {restaurant.info.id} 
                  to = {"/restaurants/"+restaurant.info.id} 
                  className="menu-link"
                  >
                    {restaurant.info.sla.deliveryTime <30 ? <InstaDeliveryRestoCard resData = {restaurant}/> : <RestoCard  resData = {restaurant}/>}
                    
                  </Link>)

                }
                
            </div>
        </div>
    )
}

export default Body;