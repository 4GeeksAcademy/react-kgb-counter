function calculateSeconds (theeCounter, placeValue){
    return Math.floor(
        theeCounter / placeValue % 10
    )
}
export default calculateSeconds