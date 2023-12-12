import React, { useEffect } from 'react'
const RestaurantMenu = () => {
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async() => {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4407513&lng=77.1031059&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const jsonData = await response.json();
    setResturantsState(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterSearch(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  } 
  return (
    <div className='menu'>
        <h1>Name of Restrauant</h1>
        <h2>Menu</h2>
        <ul>
            <li>dish 1</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu
