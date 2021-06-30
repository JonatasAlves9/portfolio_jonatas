import React from 'react';
import './styles.css';
import BoxLeft from '../components/box_left';
import Page2 from '../components/page2';

const isClicked = true;

function Home() {
  return (

    isClicked ? 
      <>
      <BoxLeft></BoxLeft>
      </>
      : <Page2></Page2>
  );
}

export default Home;
