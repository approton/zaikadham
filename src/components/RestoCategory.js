import { useState } from "react"
import ItemsList from "./ItemsList"
//get showIndex and setShowIndex from Parent and set it in the Child which is Controlled by Parent RestoMenu Component
const RestoCategory = ({data, showItems, setShowIndex}) =>{
    // console.log(data)
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>

            <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg cursor-pointer">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="text-lg font-medium">{data?.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemsList items={data?.itemCards}/>}
            </div>

        </div>
    )
}

export default RestoCategory