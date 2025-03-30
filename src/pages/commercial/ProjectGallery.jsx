import React from 'react';
import YouTubeBackground from '../../components/videoComponent/YouTubeBackground';
import GalleryList from '../../components/gallery/GalleryList';

function ProjectGallery() {
  const videoId = '4aJewT0dFJs'; 
  const textContent = {
    heading: 'PROJECT GALLERY',
  };
  return (
    <div>

     <div>
      <YouTubeBackground videoId={videoId} text={textContent}/>
     </div>
      <GalleryList/>
     <div>

     </div>
    </div>
  )
}

export default ProjectGallery