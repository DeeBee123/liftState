import React, { useState, useEffect } from "react";
import API from "../../shared/imagesData";
import "./task6.css";
import { NavBar } from "./NavBar";
import CardsComposeBox from "../../hocs/withCardsCompose"


export const Task6 = () => {
  const [images, setImages] = useState([]);
  const [errorState, setErrorState] = useState(false);


  useEffect(() => {
    API.get(`list`)
      .then((response) => {
        let data = response.data;
        setImages(data);
        setErrorState(false);
      })
      .catch((error) => {
        setErrorState(true);
        console.log(error);
      });
  }, []);



  const handleAscending = () => {
    let copyImages = [...images];
    copyImages.sort((a, b) => a.author.localeCompare(b.author));
    copyImages.slice(2, 4);
    setImages(copyImages);
  };

  const handleDescending = () => {
    let copyImages = [...images];
    copyImages.sort((a, b) => b.author.localeCompare(a.author));
    setImages(copyImages);
  };

  const handleRandom = () => {
    let copyImages = [...images];
    for (var i = copyImages.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copyImages[i];
      copyImages[i] = copyImages[j];
      copyImages[j] = temp;
    }
    setImages(copyImages);
  };

  return (
    <>
      <NavBar
        onClickAscending={handleAscending}
        onClickDescending={handleDescending}
        onClickRandom={handleRandom}
      />
      {errorState ? (
        <span>Something went wrong</span>
      ) : (
        <CardsComposeBox images={images} />
      )}
    </>
  );
};
