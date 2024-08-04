import { CDN_URL } from "../utils/constants";
import LinesEllipsis from "react-lines-ellipsis";

const RestaurantCard = (props) => {

    const {resData} = props;
  
    const{cloudinaryImageId,name,avgRating,sla,cuisines,areaName} = resData.info;
  
  
    return(
      <div className="res-card m-4 p-4 w-[220px] shadow-md rounded-md bg-gray-300 hover:shadow-lg">
          <img 
           className="res-logo rounded-md cursor-pointer"
           src={CDN_URL+cloudinaryImageId} 
           alt="restaurant logo" 
          />
        <div className="res-det p-1">
          <div className="res-name line-clamp-1 font-bold">
            {name}
          </div>
          <div className="res-rating">
            <h3>  {avgRating} ⭐</h3>
            <h3>🕛 {sla?.slaString} </h3>
          </div>
          <div className="res-area">
            <LinesEllipsis 
              text={cuisines.join(", ")}
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
            <h4>📍 {areaName}</h4>
          </div>
        </div>
        
      </div>
    )
}


// input -> RestaurantCard, Output -> RestaurantCardPromoted
//Higher order component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute p-[3] text-center bg-slate-600 text-white rounded-md shadow-md">Open now</label>
        <RestaurantCard {...props}/>
      </div>
      
    );
  };
};

export default RestaurantCard;