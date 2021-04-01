import React, {useEffect} from "react";
import {Card} from "./Card";

export const Cards = ({ images }) => {
  // useEffect(() => {

  // }, []);
  return (
    <section className="gallery">
      {images.map((image) => (
        <Card image={image}/>
      ))}
    </section>
  );
};
