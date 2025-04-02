import React from "react";
import BackRoundIntroComponent from "../../components/backround Intro/BackRoundIntro";
import BgIntroImage from "../../assets/Personal_gallery_desktop.webp";
import GalleryList from "../../components/gallery/GalleryList";

function Gallery() {
  return (
    <div>
      <BackRoundIntroComponent
        imageSrc={BgIntroImage}
        text={"STEADYRACK GALLERY"}
      />
      <GalleryList />
    </div>
  );
}

export default Gallery;
