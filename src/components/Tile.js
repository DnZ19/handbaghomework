import React from "react";

function Tile({title, text, image, altText})  {

    return  (
        <>
        <section>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{text}</p>
            <img src={image} alt={altText}/>
        </section>


        </>
    )
}

export default Tile;