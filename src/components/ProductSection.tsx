import ProductCard from "./ProductCard";
import Title from "./Title";
import { products } from "../data/products";

function ProductSection() {
    return(
        <div data-testid='product-section'>
            <Title headline='Produtos Locais' />
            { products.map((pro) => <ProductCard category={pro.category} image={pro.image} originFair={pro.originFair} productName={pro.productName} key={pro.productName} />) }
        </div>
    )
}

export default ProductSection;