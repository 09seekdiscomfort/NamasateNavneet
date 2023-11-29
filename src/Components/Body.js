import RestaurantCard from "./RestaurantCard";
import { data } from "./utils/mockData";

const Body = () =>{
    return(
        <div className='body'>
            <div className="search">Search</div>
            <div className="cardContainer">
                { data.map((restaurants) => (
                    <RestaurantCard dynamicData={restaurants}/>)
                )}
            </div>
        </div>
    )
}

export default Body;