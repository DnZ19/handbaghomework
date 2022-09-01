import React from "react";


function Product({tag, image, imageAlt, description, price})    {

    return  (
        <>
            <article>
                <span>{tag}</span>
                <img src={image} alt={imageAlt}/>
                <p>{description}</p>
                <h4>{price}</h4>
            </article>

        </>
    )
}

export default Product;