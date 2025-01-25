import { useDispatch } from "react-redux"
import { RES_LOGO_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"
const ItemsList = ({items}) => {
    // console.log(items)

    const dispatch = useDispatch()
    const handleAddItems = (item) => {
        // dispatch an action
        dispatch(addItem(item))
        console.log(item)
    }

    return (
        <div>
           
            {items.map((item)=>(
            
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                    
                    <div className="flex justify-between">
                        <span className="text-lg font-medium">
                            {item.card.info.name}
                        </span>
                        <img src={RES_LOGO_URL + item?.card?.info?.imageId} className="w-16 rounded-md"></img>
                    </div>
                    <div className="flex justify-between">
                        <span className="my-0">₹ {(item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice : item?.card?.info?.price)/100}</span>
                        <button className="w-16 rounded-lg my-2 text-white bg-black" onClick={()=>handleAddItems(item)}>Add +</button>
                    </div>
                    
                    
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                ))}
            
        </div>
    )
}

export default ItemsList