import { useCallback, useEffect, useMemo, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { data } from "./utils/mockData";
import Skeleton from "react-loading-skeleton";
import searchIcon from "../../assets/Icons/searchIcon.png"

const Body = () =>{
    const [resturantsState, setResturantsState] = useState([]);
    const [filterSearch, setFilterSearch] = useState([]);
    const [search, setSearch] = useState('');

    const filterData = () =>{
         setFilterSearch(resturantsState?.filter((res)=> res.info.avgRating>4));
    };

    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4407513&lng=77.1031059&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
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
                                <RestaurantCard dynamicData={restaurants} key={restaurants?.dynamicData?.info}/>
                            </>
                        ))}
                    </div>
    
            </div>
            </div>
        )
    }
    
}

export default Body;