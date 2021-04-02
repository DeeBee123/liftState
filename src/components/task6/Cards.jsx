import React from "react";
import {Card} from "./Card";


export const Cards = ({ images }) => {

  return (
    <section className="gallery">
      {images.map((image) => (
        <Card image={image}/>
      ))}
    </section>
  );
};
