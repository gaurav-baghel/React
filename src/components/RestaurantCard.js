import { CDN_URL } from "../utils/constants";
import LinesEllipsis from "react-lines-ellipsis";

const RestaurantCard = (props) => {

    const {resData} = props;
  
    const{cloudinaryImageId,name,avgRating,sla,cuisines,areaName} = resData.info;
  
  
    return(
      <div className="res-card" >
          <img 
           className="res-logo"
           src={CDN_URL+cloudinaryImageId} 
           alt="restaurant logo" 
          />
        <div className="res-det">
          <div className="res-name">
              <h3>{name}</h3>
          </div>
          <div className="res-rating">
            <h3>{avgRating} ⭐</h3>
            <h3>&emsp;🕛 {sla?.slaString} </h3>
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

export default RestaurantCard;