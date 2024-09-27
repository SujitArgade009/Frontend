export default Price;


function Price({oldPrices,newPrices}){
    let oldStyles={
        textDecorationLine: "line-through",
    }
    let newStyles={
        fontWeight: "bold",
    }
    let styles={
        backgroundColor : "#e0c367",
        height: "30px",
        borderBottomLeftRadius:"15px",
        borderBottomRightRadius:"15px"
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrices}</span>
            &nbsp;  &nbsp;  &nbsp;
            <span style={newStyles}>{newPrices}</span>
        </div>
    )
}