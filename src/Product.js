import ProductForm from "./ProductForm";

function Product(props) {
    var {image, name, description, price, onSale} = props.details;

    function displaySale() {
        return <>
            <span className="sale">Sale</span>
            <p className="sale-price">$49.99</p>
        </>;
    }

    return(
    <div className="product">
        <img src={image} width="50" alt={name} />
        <div className="product-info">
            <h2>{name}</h2>
            <span className="price-info">
                {onSale === true ? displaySale : false}
                <p className={onSale === true ? "slashed-price" : false}>{price}</p>
            </span>
            <p>{description}</p>
        </div>
        <div className="product-buttons">
            <ProductForm details={props} />
        </div>
    </div>
    );
}

export default Product;