import {useState} from "react";

// After I figure out the default way of writing and sending off and refilling forms in React, I want to check out two libraries and do other forms using them:
// 1. Formik (https://formik.org/)
// 2. React Hook Form (https://react-hook-form.com/)

export default function ProductForm() {
    var [order, setOrder] = useState({});
    var [count, setCount] = useState(0);
    var [size, setSize] = useState("Medium");
    var [color, setColor] = useState("Pink");
    var [customContent, setCustomContent] = useState("");
    var [textareaContent, setTextareaContent] = useState("");

    /**
     * order: {itemId: , color: , size: , customContent: , count: }
     */

    function handleRemoveOrder() {
        setOrder({});
    }

    // I'm not sure if I need to explicitly call this on the submit button as I am in this example.
    function handleSubmit(event) {
        // this prevents the submit event from firing/reloading the entire page
        event.preventDefault();
        var form = event.target;
        // var formData = new FormData(form);
        console.log(form);
        console.log("Order: "+order);
        console.log("Count: "+count);
        console.log("Size: "+size);
        console.log("Color: "+color);
        console.log("customContent: "+customContent);
        console.log("textareaContent: "+textareaContent);
    }

    function handleCountDecrease() {
        if (count > 0) {
            setCount(count-1);
        }
    }

    function handleCountIncrease() {
        setCount(count+1);
    }


    return(<>
     <form method="post" onSubmit={handleSubmit}>
        <div className="selections">
            <label className="color-choices">
                Color
                <select onChange={event => setColor(event.target.value)} name="color" value={color}>
                    <option value="Brown">Brown</option>
                    <option value="Pink">Pink</option>
                </select>
            </label>

            <label className="size-choices">
                Size
                <select onChange={event => setSize(event.target.value)} name="size" value={size}>
                    {/* I'm trying to figure out if I *need* value attributes set on these options. */}
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
        </div>
        
        <button onClick={handleCountDecrease} disabled={count<1 ? true : false} className="product-sub">-</button>
        <h3 className="product-count">{count}</h3>
        <button onClick={handleCountIncrease} type="button" className="product-add">+</button>
        
        <label>
            Custom content:
            <input onChange={event => setCustomContent(event.target.value)} name="customContent" type="text"></input>
        </label>
        <label>
            Further notes:
            <textarea onChange={event => setTextareaContent(event.target.value)} name="textareaContent" />
        </label>
        
        {/* You have onSubmit filled out on the form element, so label this clearly but put your submission method there. This is so that pressing enter submits the form so the form is a step closer to being accessible. */}
        <button type="submit">Add to Cart</button>
        <button onClick={handleRemoveOrder} type="button">Remove from Cart</button>
     </form>
    </>);
}
