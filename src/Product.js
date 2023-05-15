import ProductForm from "./ProductForm";
import ProductPriceDisplay from "./ProductPriceDisplay";
import './Product.scss';

export default function Product(props) {
    var {image, name, description, price, salePrice, onSale} = props.details;

    return(
    <div className="product">
        <ProductPriceDisplay details={[image, name, price, onSale, salePrice]} />
        <div className="product-info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        <div>
            <ProductForm details={props.details} />
        </div>
    </div>
    );
}