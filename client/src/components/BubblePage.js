import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../Utilities/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        console.log('js: BubblePage.js: useEffect: catch: err', err)
      });
  }, [setColorList])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
