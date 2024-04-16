const withTestComponent = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label>My Test</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}

export default withTestComponent
