import React from 'react';
import './App.css';
import Product from "./components/Products";
import Button from "./components/Button";
import Tile from "./components/Tile";

import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";



function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>

                <Button
                    text="To the collection"
                    disable={false}
                />
                <Button
                    text="Shop all bags"
                    disable={false}

                />
                <Button

                    text="Pre-Orders"
                    disable={true}

                />

            </nav>

            <main>
                <Product
                    tag="Best seller"
                    image={bag_1}
                    imageAlt="bag_1"
                    description="The handy bag"
                    price="€400,-"

                />

                <Product
                    tag="Best seller"
                    image={bag_2}
                    imageAlt="bag_2"
                    description="The stylish bag"
                    price="€250,-"
                />

                <Product
                    tag="New collection"
                    image={bag_3}
                    imageAlt="bag_3"
                    description="The simple bag"
                    price="€300,-"
                />

                <Product
                    tag="New collection"
                    image={bag_4}
                    imageAlt="bag_4"
                    description="The trendy bag"
                    price="€150,-"
                />

            </main>

            <footer>

                <Tile
                    title="The brand"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis est minima nemo
                        nesciunt fugit harum "

                    text="in iure libero numquam officia possimus reprehenderit sapiente voluptatibus.
                        Consectetur, repellendus suscipit."

                />

                <Tile
                    image={brand}
                    altText="brand"
                />

                <Tile
                    image={story}
                    altText="story"

                />

                <Tile
                    title="Our story"
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet asperiores atque\n" +
                        "                        blanditiis debitis doloremque earum eius excepturi facilis fugiat id illo iste magnam magni\n" +
                        "                        maxime minima placeat possimus quasi recusandae saepe sunt temporibus, veritatis. Illo nulla\n" +
                        "                        numquam odio ut."}

                />

            </footer>


        </>


    );
}

export default App;



