import ProductCard from "./ProductCard";
import Title from "./Title";
import { products } from "../data/products";
import "./styles/ProductSection.css"

function ProductSection() {
    return(
        <div data-testid='product-section'>
            <Title className="section-title" headline='Produtos Locais' />
            <div className="product-cards">
                { products.map((pro) => <ProductCard category={pro.category} image={pro.image} originFair={pro.originFair} productName={pro.productName} key={pro.productName} />) }
            </div>
        </div>
    )
}

export default ProductSection;