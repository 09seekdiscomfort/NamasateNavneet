import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import searchIcon from "../../assets/Icons/searchIcon.png"
import { API_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Body = () =>{
    const [resturantsState, setResturantsState] = useState([]);
    const [filterSearch, setFilterSearch] = useState([]);
    const [search, setSearch] = useState('');
    const [skeletonState, setSkeletonState] = useState(true);

    const filterData = () =>{
         setFilterSearch(resturantsState?.filter((res)=> res.info.avgRating>4));
    };

    const fetchData = async () => {
        await fetch(API_URL.restaurantsCards)
            .then(async (response)=>{
            const jsonData = await response.json();
            setResturantsState(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterSearch(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setSkeletonState(false);
        }).catch(()=>{
            setFilterSearch([]);
        });
    };
    const searchFilter = () =>{
        const data = (resturantsState?.filter((data)=> data.info.name.toUpperCase().includes(search.toUpperCase())));
        setFilterSearch(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                    {!skeletonState && (
                        <div className="cardContainer">
                            { filterSearch?.map((restaurants) => (
                                <>
                                    <Link to={`menu/${restaurants?.info?.id}`} key={restaurants?.info?.id}>
                                        <RestaurantCard dynamicData={restaurants} />
                                    </Link>
                                    
                                </>
                            ))}
                        </div>
                    )}
                    {skeletonState && (
                        <div className="cardContainer">
                            <Skeleton className="restImageSkeleton"count={3} style={{ display: "flex" }}/>
                        </div>
                    )}
            </div>
            </div>
        )
    }

export default Body;