import React, { useEffect, useState } from 'react'
import { API_URL } from './utils/constants';
import { useParams } from 'react-router-dom';


const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState();
  const { resId } = useParams();

  const fetchData = async() => {
    const response = await fetch(API_URL.dynamicRoute+resId);
    const jsonData = await response?.json();
    console.log('jsonData', jsonData);
    if(jsonData?.data?.cards){

      setMenuData(jsonData?.data?.cards[0]?.card?.card?.info)
    }else{
      setMenuData(null);
    }
  } 
  
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className='menu'>
        <h1>{menuData?.name}</h1>
        <h2>Menu</h2>
        <ul>
          {menuData?.cuisines?.map((menuItem)=>
            <li>{menuItem}</li>
          )}
        </ul>
    </div>
  )
}

export default RestaurantMenu
