import { useEffect, useState } from 'react'

import RestaurantCard from './RestaurantCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import searchIcon from '../../assets/Icons/searchIcon.png'
import { API_URL } from './utils/constants'
import { Link } from 'react-router-dom'

const Body = () => {
    const [resturantsState, setResturantsState] = useState([])
    const [filterSearch, setFilterSearch] = useState([])
    const [search, setSearch] = useState('')
    const [skeletonState, setSkeletonState] = useState(true)

    const filterData = () => {
        setFilterSearch(
            resturantsState?.filter((res) => res.info.avgRating > 4)
        )
    }

    const fetchData = async () => {
        await fetch(API_URL.restaurantsCards)
            .then(async (response) => {
                const jsonData = await response.json()
                setResturantsState(
                    jsonData?.data?.cards[4]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants
                )
                setFilterSearch(
                    jsonData?.data?.cards[4]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants
                )
                setSkeletonState(false)
            })
            .catch(() => {
                setFilterSearch([])
            })
    }
    const searchFilter = () => {
        const data = resturantsState?.filter((data) =>
            data.info.name.toUpperCase().includes(search.toUpperCase())
        )
        setFilterSearch(data)
    }

    const RestaurantCardModified = testComponent(RestaurantCard)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="bdy-container">
            <div className="bdy-hdr">
                <div className="search flex justify-center mt-4">
                    <input
                        type="text"
                        className="searchText border border-solid border-black h-7 rounded-xl"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                    <button
                        className="flex items-center bg-green-300 px-4 ml-2 rounded-xl shadow-xl"
                        onClick={searchFilter}
                    >
                        <img
                            src={searchIcon}
                            className="w-7"
                            alt="Search Icon"
                        />
                    </button>
                    <div className="flex items-center bg-green-300 px-4 ml-2 rounded-xl btn-filter shadow-xl">
                        <button onClick={() => filterData()}>
                            Best Restaurants
                        </button>
                    </div>
                </div>
            </div>
            <div className="body">
                {!skeletonState && (
                    <div className="cardContainer flex flex-wrap">
                        {filterSearch?.map((restaurants) => (
                            <div key={restaurants?.info?.id}>
                                <Link to={`menu/${restaurants?.info?.id}`}>
                                    <RestaurantCard dynamicData={restaurants} />
                                    <RestaurantCardModified
                                        dynamicData={restaurants}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
                {skeletonState && (
                    <div className="cardContainer">
                        <Skeleton
                            className="restImageSkeleton"
                            count={3}
                            style={{ display: 'flex' }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Body

export const testComponent = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label>My Test</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}
