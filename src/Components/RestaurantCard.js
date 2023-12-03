const RestaurantCard = (props) => {
    const {name, costForTwo, cloudinaryImageId, id, avgRating } = props.dynamicData.info
    const {deliveryTime} = props.dynamicData.info.sla;
    return(
        <div className="restaurantCard" key={id}>
            <div className="imageRestaurant">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} className="restImage"></img>
            </div>
            <h3 className="resturantName">{name}</h3>
            <h4>Rating {avgRating}</h4>
            <h4>Cusine</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
};

export default RestaurantCard ;