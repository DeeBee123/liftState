import React from "react";

export const Card = ({image}) => {
    return (
       
            <figure className="image" key={image.id}>
              <img
                className="image__photo"
                src={image.download_url}
                alt={`by ${image.author}`}
              />
              <figcaption className="image__author">{image.author}</figcaption>
            </figure>
      
      );
}