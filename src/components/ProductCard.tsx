interface IProductCard {
    productName: string
    category: string
    originFair: string
    image: string
}

function ProductCard({productName, category, originFair, image}: IProductCard) {
    return(
        <div className="product-card">
            <img src={image} alt={productName} />
            <h3>{productName}</h3>
            <p className="tag">{category}</p >
            <p className="origin">{originFair}</p>
        </div>
    )
}

export default ProductCard;