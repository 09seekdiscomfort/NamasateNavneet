import { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ item, showItem, setShowIndex }) => {
    return (
        <>
            <div className="w-6/12 bg-gray-100 m-auto my-4 shadow-lg p-4">
                <div
                    className="flex justify-between font-bold m y-10 cursor-pointer"
                    onClick={() => setShowIndex()}
                >
                    <span>
                        {item?.title} ({item?.itemCards?.length})
                    </span>
                    <span>{showItem ? '⬆️' : '⬇️'}</span>
                </div>
                {showItem && <ItemList data={item?.itemCards} />}
            </div>
        </>
    )
}

export default RestaurantCategory
