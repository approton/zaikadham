import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/constants";

const useRestoMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResMenu(json.data)
    }
    return resMenu;
}

export default useRestoMenu