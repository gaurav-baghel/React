import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local state variable --> super powerful variable
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  //state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");

  const [filteredListRestaurant, setFilteredListRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://proxy.cors.sh/
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // , {
      //   headers: {
      //   'x-cors-api-key': 'temp_b63fc4e2b79e4b8bb58b6b24e966c6a7'
      //   }
      // }
    );

    const json = await data.json();
    console.log(json);

    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h2>
        ⛔ Looks like you're offline! Please check you internet connection.
      </h2>
    );

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Search m-4 p-4 flex items-center ml-32">
        <input
          type="text"
          className="border border-solid border-black my-1 rounded-md py-2 text-center h-fit"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="searchBtn px-4 py-2 m-4 rounded-md bg-orange-500 text-white"
          onClick={() => {
            console.log(searchText);
            const filterData = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setFilteredListRestaurant(filterData);
          }}
        >
          Search
        </button>

        <div className="filter">
          <button
            className="filter-btn m-4 px-4 py-2 text-white rounded-md bg-gray-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredListRestaurant(filteredList);
            }}
          >
            {" "}
            Filter top restaurants
          </button>
        </div>

        {/* <div>
          <label>Username: </label>
          <input
            className="border-black"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div> */}
      </div>

      <div className="res-container w-12/12 m-auto items-center">
        <div className="res-container-heading m-4 p-4 font-bold text-2xl text-center text-gray-500">
          Top restaurant chains in Faridabad
        </div>
        <div className="res-card-container flex flex-wrap">
          {filteredListRestaurant.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {
                /*if restaurant is promoted then add promoted label to it*/
                restaurant.info.isOpen ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )
              }
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
