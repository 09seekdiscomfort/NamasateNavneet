import star from '../../assets/Icons/star.jpg'
const RestaurantCard = (props) => {
    const {name, costForTwo, cloudinaryImageId, id, avgRating, cuisines } = props.dynamicData.info
    const {deliveryTime} = props.dynamicData.info.sla;

    return(
        <div className="restaurantCard m-4 w-[16rem] shadow-2xl min-h-[26rem] rounded-xl transition-transform transform scale-100 hover:scale-90">
            <div className="imageRestaurant">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} className="restImage w-[30rem] h-[12rem] object-cover rounded-3xl p-4"></img>
            </div>
            <div className="rst-txt min-h-28 m-4">
                 <h3 className="resturantName text-xl font-semibold mt-4 line-clamp-1">{name}</h3>
                <div className="flex items-center mt-4">
                        <span className="ml-1 text-gray-700">Rating {avgRating}</span>
                        <img src={star} alt="Star" className="star-img w-5" />
                </div>
                <h4 className="cusines line-clamp-1 mt-4">{cuisines.join(", ")}</h4>
                <div className='flex justify-between mt-6'>
                    <h4 className="font-bold">{costForTwo}</h4>
                    <h4 className=" text-gray-700">{deliveryTime} Minutes</h4>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard ;