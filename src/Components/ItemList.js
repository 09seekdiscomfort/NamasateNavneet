const ItemList = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <>
                    <div
                        key={item?.card?.info?.id}
                        className=" p-2 m-2 border-b-2 text-left flex justify-between"
                    >
                        <div className=" ">
                            <span className="p-2 block font-serif font-semibold">
                                {item?.card?.info?.name}
                            </span>
                            <span className="p-2 block">
                                ₹{' '}
                                {(item?.card?.info?.price ||
                                    item?.card?.info?.defaultPrice) / 100}
                                /-
                            </span>
                            <span className="p-2 block w-[30rem]">
                                {item?.card?.info?.description}
                            </span>
                        </div>
                        <div class="relative">
                            <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
                                class="restImage w-[12rem] h-[12rem] object-cover rounded-3xl p-4"
                            />
                            <button class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black py-2 px-4 rounded-md">
                                Add+
                            </button>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}

export default ItemList
