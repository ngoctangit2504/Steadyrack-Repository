import React from 'react';
import BgIntroComponent from "../../components/backround Intro/BackRoundIntro";
import BgIntroImg from "../../assets/Steadyrack-review_0-2000.jpg";
import StoriesList from '../../components/stories/StorieList';

function Stories() {
  return (
    <div>
    <BgIntroComponent imageSrc={BgIntroImg} text={"Steadyrack Stories"}/>
    <StoriesList/>
    </div>
  )
}

export default Stories