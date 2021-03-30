import React, { useState, useEffect } from "react";
import API from "../../shared/imagesData";
import "./task6.css";
import { NavBar } from "./NavBar";
import { Cards } from "./Cards";

export const Task6 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    API.get(`v2/list`).then((response) => {
      console.log("effect");
      setImages(response.data);
    });
  }, []);



  const handleAscending = () => {
      console.log("ascending flow ok")
    let copyImages = images;
    copyImages.sort((a, b) => a.author.localeCompare(b.author));
    // console.log(copyImages);
    setImages(copyImages);
  };

  const handleDescending = () => {
    console.log("descending flow ok")
    let copyImages = images;
    copyImages.sort((a, b) => b.author.localeCompare(a.author));
    // console.log(copyImages);
    setImages(copyImages);
  };

  return (
    <>
      <NavBar
        onClickAscending={handleAscending}
        onClickDescending={handleDescending}
      />
      <Cards images={images} />
    </>
  );
};
