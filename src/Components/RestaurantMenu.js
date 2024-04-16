import React, { useContext, useEffect, useState } from 'react'
import { API_URL } from './utils/constants'
import { useParams } from 'react-router-dom'
import RestaurantCategory from './RestaurantCategory'
import UserContext from './utils/UserContext'

const RestaurantMenu = () => {
    const [menuData, setMenuData] = useState()
    const { resId, name } = useParams()
    const [showIndex, setShowIndex] = useState(0)
    const { userName } = useContext(UserContext)

    const fetchData = async () => {
        const response = await fetch(API_URL.dynamicRoute + resId)
        const jsonData = await response?.json()
        if (jsonData?.data?.cards) {
            setMenuData(
                jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                    (c) =>
                        c?.card?.card?.['@type'] ===
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
                )
            )
        } else {
            setMenuData(null)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className=" text-center">
                <h1 className="text-2xl font-bold m y-10 ">{name}</h1>
                <h2>Menu</h2>
                {menuData?.map((item, index) => (
                    <div key={index}>
                        <RestaurantCategory
                            item={item?.card?.card}
                            showItem={index === showIndex ? true : false}
                            setShowIndex={() => {
                                if (index !== showIndex) setShowIndex(index)
                                else setShowIndex(null)
                            }}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default RestaurantMenu
