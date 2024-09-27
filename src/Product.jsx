import  "./Product.css";
import Price from "./Price.jsx"

function Product({Title,Idx}){
    // let isDiscount=price>30000;
    // let styles={backgroundColor: isDiscount ? "skyblue" :null};
    let oldPrices=["12,399","3,761","14,499","423"];
    let newPrices=["8,999","2,999","7,500","210"];
    let Description=[
        ["8,000 DPI","ititutive Surface"],
        ["ititutive Surface","Designed for Ipad Pro"],
        ["Designed for Ipad Pro","ititutive Surface"],
        ["wireless","Designed for Ipad Pro","ititutive Surface"],
    ];
        return(
            <div className="Product">
                <h4>{Title}</h4>
                <p>{Description[Idx][0]}</p>
                <p>{Description[Idx][1]}</p>
                <Price oldPrices={oldPrices[Idx]} newPrices={newPrices[Idx]} />
            </div>
        );
}

export default Product;

