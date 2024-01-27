import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants.js";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null); 

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const menuData = await fetch(MENU_API+resId);
        const json = await menuData.json();
        setResInfo(json.data);
    };


    if(resInfo === null){
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="restaurant-menu">
            <div className="restaurant-name">
                <h1>{name}</h1>
            </div>
            <div className="res-cuisine">
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            </div>
            {/* <div className="res-cost">
                <p>Rs 1400 for two</p>
            </div> */}
            <div className="menu-heading">
                <h2>Main Course</h2>
            </div>
            <ul>
                {itemCards.map(item => 
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹{item.card.info.price/100}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;