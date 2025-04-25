interface IProductCard {
    productName: string
    category: string
    originFair: string
    image: string
}

function ProductCard({productName, category, originFair, image}: IProductCard) {
    return(
        <>
            <img src={image} alt={productName} />
            <p>{productName}</p>
            <p>{category}</p>
            <p>{originFair}</p>
        </>
    )
}

export default ProductCard;