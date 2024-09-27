import Product from "./Product.jsx";


function ProductTab() {
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }
    return(
        <div style={styles}>
        <Product Title="Logitech Mx Master" Idx={0} /> 
        <Product Title="Apple Pencil (2nd gen)" Idx={1}/>
        <Product Title="Zebronics ZebTransformer" Idx={2}/>
        <Product Title="Portronics Toad Ergo" Idx={3}/>
        </div>
    );
}

export default ProductTab;