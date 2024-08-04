import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-2 my-2 border-b-4 border-b-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="pb-2">
              <span>{item.card.info.name}</span>
            </div>
            <div className="pb-2">
              <span>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>

            <div className="pb-2">
              {item.card.info.ratings.aggregatedRating.rating == null ? (
                <span></span>
              ) : (
                <div className="pb-2">
                  <span className="font-semibold">
                    ⭐ {item.card.info.ratings.aggregatedRating.rating}
                  </span>
                  <span>
                    {" "}
                    ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-[3] m-2">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-md"
            ></img>
            <div className="inset-0 flex items-center justify-center">
              <button className="px-4 py-2 m-auto font-bold text-green-500 border-2 border-green-500 shadow-md rounded-md">
                {" "}
                ADD{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
