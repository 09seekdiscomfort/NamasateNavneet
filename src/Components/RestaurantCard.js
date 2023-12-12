import star from '../../assets/Icons/star.jpg'
const RestaurantCard = (props) => {
    const {name, costForTwo, cloudinaryImageId, id, avgRating, cuisines } = props.dynamicData.info
    const {deliveryTime} = props.dynamicData.info.sla;

    console.log(' props.dynamicData.info',  props.dynamicData.info);
    return(
        <div className="restaurantCard">
            <div className="imageRestaurant">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} className="restImage"></img>
            </div>
            <div className="rst-txt">
                <h3 className="resturantName">{name}</h3>
                <h4><img src={star} className='star-img'/>Rating {avgRating}</h4>
                <h4 className="cusines">{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} Minutes</h4>
            </div>
        </div>
    )
};

export default RestaurantCard ;