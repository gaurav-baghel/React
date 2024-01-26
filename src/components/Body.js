import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () =>{

  //Local state variable --> super powerful variable
  const [listOfRestaurants,setListofRestaurants] = useState([]);
  //state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");

  const [filteredListRestaurant, setFilteredListRestaurant] = useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async() => {
    const data = await fetch(
      // "https://proxy.cors.sh/
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // , {
      //   headers: {
      //   'x-cors-api-key': 'temp_b63fc4e2b79e4b8bb58b6b24e966c6a7'
      //   }
      // }
    );

      const json = await data.json();
      console.log(json);

      setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  
    //Conditional Rendering
    return listOfRestaurants.length===0 ? ( <Shimmer/> 
    ) : (
      <div className = "body">
        <div className="Search">
          <input 
            type="text" 
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
                        
          ></input>
          <button 
            className="searchBtn"
            onClick={()=>{

              console.log(searchText);
              const filterData = listOfRestaurants.filter((restaurant)=>(
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            ));

              setFilteredListRestaurant(filterData);
            }}
          >Search</button>
        </div>
        <div className="filter">
          <button className="filter-btn"
            onClick={()=>{
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredListRestaurant(filteredList);
            }}
          > Filter top restaurants</button>
        </div>
        <div className="res-container">
          <div className="res-container-heading">
            Top restaurant chains in Faridabad
          </div>
          <div className="res-card-container">
            {
              filteredListRestaurant.map(
                (restaurant) => (
                  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                )
              )
            }
            
          </div>
          
        </div>
      </div>
      
    )
}

export default Body;