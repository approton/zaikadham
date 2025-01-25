// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestoMenu from "../utils/useRestoMenu"
import RestoCategory from "./RestoCategory"
import { useState } from "react"
const RestoMenu = () =>{

    // const [resMenu, setResMenu] = useState(null)
    // useEffect(()=>
    //     {
    //     fetchMenu();
    //     },[]);

    // const {resId} = useParams()

    // const fetchMenu = async () =>{
    //     // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.5281418&lng=83.8106684&restaurantId=682111")
    //     const data=await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     // console.log(json);
    //     setResMenu(json.data)
    // }
    const {resId} = useParams()
    const resMenu = useRestoMenu(resId)
    const [showIndex, setShowIndex] = useState(null);
    const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(categories);
    if(resMenu===null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    //console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // const { itemCards2 } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        return  (
            <div className="resto-menu">
                <h2 className="text-2xl font-bold my-6 text-center">{name}</h2>
                <h3 className="text-center">{cuisines.join(", ")} - {costForTwoMessage}</h3>
                {categories.map((category, index) => 
                    //Controlled Component
                    <RestoCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItems = {index===showIndex?true: false}
                        setShowIndex = {()=>setShowIndex(index)}
                    />
                )}
            </div>
        )
    }

export default RestoMenu;