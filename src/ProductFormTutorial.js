import Product from "./Product.js";
import {useState} from "react";

export default function ProductFormTutorial() {

    /**
     * This is code that functions through the React tutorial I took at https://react-tutorial.app/ Not all of these are best practices, but it's good to find a *working* version 
     */

    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);

    /** Individual Product Methods on Form */
    function handleSubmission() {
        var newProduct = {name: name, description: description, id: products.length}
        setProduct(newProduct);
        var newProducts = [...products, newProduct];
        setProducts(newProducts);
        handleReset();
    }
    function handleReset() {
        setProduct({});
        setName("");
        setDescription("");
    }

    /** Product List Methods */
    function handleDeletion(productToDelete) {
        var newList = products.filter(eachProduct => eachProduct.id !== productToDelete.id);
        setProducts(newList);
    }

    return <>
        <form onSubmit={handleSubmission}>
            <ProductFormNameField  name={name} updateName={setName} />
            <ProductFormDescriptionField description={description} updateDescription={setDescription} />
            <div className="form-footer">
                <div className="validation-message"></div>
                <input type="submit" className="btn btn-primary" value="Add product" />
            </div>
        </form>
        {products.length === 0 && <div><p>Add your first product</p></div>}
        <ul className="store-front">
            {products.map(eachProduct => 
            <li key={eachProduct.id}>
                <Product details={eachProduct} />
                <button onClick={() => handleDeletion(eachProduct)} button="button" className="btn-outline btn-delete">Delete</button>
            </li>
            )}
        </ul>
    </>;
}

export function ProductFormNameField(props) {
    return (
        <label>
            Name:
            <input onChange={e => props.updateName(e.target.value)} type="text" placeholder="Enter the name" className="textfield" value={props.name} />
        </label>
    );
}

export function ProductFormDescriptionField(props) {
    return (
        <label>
        Description:
            <input onChange={e => props.updateDescription(e.target.value)} type="text" placeholder="Enter the description" className="textfield" value={props.description} />
        </label>
    );
}