import React from 'react';
import BackRoundIntro from '../../components/backround Intro/BackRoundIntro';
import imageTop from '../../assets/ambassadors_hero_desktop.webp'

function Ambassadors() {
  return (
    <div>
    <BackRoundIntro
      imageSrc={imageTop} 
      text="STEADYRACK AMBASSADORS"
    />
    </div>
  )
}

export default Ambassadors