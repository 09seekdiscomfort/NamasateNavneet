import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Skeleton from "react-loading-skeleton";
import searchIcon from "../../assets/Icons/searchIcon.png"
import { API_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Body = () =>{
    const [resturantsState, setResturantsState] = useState([]);
    const [filterSearch, setFilterSearch] = useState([]);
    const [search, setSearch] = useState('');

    const filterData = () =>{
         setFilterSearch(resturantsState?.filter((res)=> res.info.avgRating>4));
    };

    const fetchData = async () => {
        const response = await fetch(API_URL.restaurantsCards);
        const jsonData = await response.json();
        setResturantsState(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterSearch(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const searchFilter = () =>{
        const data = (resturantsState?.filter((data)=> data.info.name.toUpperCase().includes(search.toUpperCase())));
        setFilterSearch(data);

    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log('filterSearch', filterSearch);

    if(filterSearch?.length === 0){
        return(
            <>
                <Skeleton height={50}  width={50} />
            </>
        )
    }
    else {
        return(
            <div className="bdy-container">
            <div className="bdy-hdr">
                 <div className="search">
                    <input 
                        type="text" 
                        className="searchText" 
                        value={search}
                        onChange={(e)=>{
                            setSearch(e.target.value);
                        }}
                    />
                    <img src={searchIcon} className="searchIcon" onClick={()=>searchFilter()}/>
                </div>
                <div className="btn-filter">
                    <button onClick={()=>filterData()}>Best Restaurants</button>
                </div>
            </div> 
            <div className='body'>
                    <div className="cardContainer">
                        { filterSearch?.map((restaurants) => (
                            <>
                                <Link to={`menu/${restaurants?.info?.id}`} key={restaurants?.info?.id}>
                                    <RestaurantCard dynamicData={restaurants} />
                                </Link>
                            </>
                        ))}
                    </div>
    
            </div>
            </div>
        )
    }
    
}

export default Body;