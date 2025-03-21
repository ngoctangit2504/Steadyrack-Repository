import React from 'react';

const RichTextTitle = ({ title }) => {
  return (
    <span
      className="block text-2xl sm:text-3xl md:text-4xl text-center m-8 sm:m-16 md:m-32 font-semibold aos-animate"
      data-aos="fade-up"
      data-aos-anchor="#Richtext"
      data-aos-delay="150"
    >
      {title}
    </span>
  );
};

export default RichTextTitle;