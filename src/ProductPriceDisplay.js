import './Product.scss';

export default function ProductPriceDisplay(props) {
    const {image, name, price, onSale, salePrice} = props.details;

    function displaySale() {
        return(<>
            <span className="sale">Sale</span>
            <p className="price-sale">{salePrice}</p>
        </>);
    }

    return(<>
        <span className="price">
            <img src={image} alt={name} />
            <span className="price-info">
                {onSale === true ? displaySale() : false}
                <p className={onSale === true ? "price-slashed cost" : "cost"}>{price}</p>
            </span>
        </span>
    </>);
}