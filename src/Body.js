import Counter from "./Counter";
import Card from "./Card";
import GhostMessage from "./GhostMessage";
import LifeCalculator from "./LifeCalculator/LifeCalculator"
import Product from "./Product";
import StoryBook from "./StoryBook";
import ToDoList from "./ToDo/ToDoList";
import WhiteEraseBoard from "./WhiteEraseBoard";

export default function Body() {

    // Shoes; with circle was too zoomed in
    // https://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg

    var productInfo = [{
        image: "https://i.pinimg.com/originals/f8/47/f0/f847f0f3603178ac6687e69d84bff10e.jpg",
        name: "One cool bra",
        onSale: false,
        salePrice: 0,
        price: 129.99,
        description: "For that sweet sweet cool factor",
        options: {
            color: ["Brown", "Pink"],
            size: ["Small", "Medium", "Large"]
        }
    },
    {
        image: "https://mistillas.cl/wp-content/uploads/2018/03/27.990.jpg",
        name: "Cool Shirt",
        onSale: true,
        salePrice: 88.88,
        price: 99.99,
        description: "Because the coolest shirts are stolen from the fifty cent bin from Goodwill",
        options: {
            color: ["Pink with Red", "Orange with Yellow"],
            size: ["XS", "S", "M", "L", "XL"]
        }
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
                <LifeCalculator /> 
            </Card>
            Hooks:
            <Card>
                <GhostMessage />
            </Card>
            <Card>  
                <WhiteEraseBoard /> 
            </Card>
            <Card>  
                <StoryBook /> 
            </Card>
        </div>
    );
}