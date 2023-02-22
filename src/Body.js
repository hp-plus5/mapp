import Counter from "./Counter";
import Card from "./Card";
import Product from "./Product";
import ToDoList from "./ToDoList";
import './Body.scss';

function Body() {

    var productInfo = [{
        image: "https://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg",
        name: "Cool Shoes",
        onSale: true,
        price: 129.99,
        description: "No brand like name brand, am I right?"
    },
    {
        image: "https://mistillas.cl/wp-content/uploads/2018/03/27.990.jpg",
        name: "Cool Shirt",
        onSale: true,
        price: 99.99,
        description: "Because the coolest shirts are stolen from the fifty cent bin from Goodwill"
    }];
/** 
 *  <FeaturedProducts>
 *      {collection_of_featured_products.map((card_item) => <Card key={card_item} actually_prop={card_item} />)} 
 *  </FeaturedProducts>
 *  <SaleAdvertisement />
 *  <MembershipAdvertisement />
 *  <Policies /> // like eco-friendliness
 *  <Events />
 */
/** Another valid syntax:
    return [
        {collection_of_cards.map((card_item) => <Card key={card_item} actually_prop={card_item} />)} 
    ];
*/
    return (
        <div id="body">
            <Card>  
                <Counter /> 
            </Card>
            <Card>  
                <Product details={productInfo[0]} /> 
            </Card>
            <Card>  
                <Product details={productInfo[1]} /> 
            </Card>
            <Card>  
                <ToDoList /> 
            </Card>
            <Card>  
                <Counter /> 
            </Card>
            <Card>  
                <Counter /> 
            </Card>
            <Card>  
                <Counter /> 
            </Card>
        </div>
    );
}

export default Body;