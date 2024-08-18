import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const menuData = await fetch("https://proxy.cors.sh/"+MENU_API+resId
      , {
        headers: {
        'x-cors-api-key': 'temp_275ba9b10fb7934aaa883a045bfc22dd'
        }
      });
        const json = await menuData.json();
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;