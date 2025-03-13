import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonA from "../buttons/ButtonA";
import ButtonC from "../buttons/ButtonC";

class ReviewCarousel extends Component {
  state = {
    currentIndex: 0,
    direction: "next",
  };

  reviews = [
    {
      rating: "★★★★★",
      title: "Aussie Bike Racks",
      content:
        "These Aussie racks are awesome. I started with two for my wife and I and tested them for a couple of years. I have now purchased 3 more and recommended them to friends of mine who also purchased them. Great system, nicely folds the bikes out of the way for more room in the garage. Highly recommended. Customer service is also awesome.",
      product: "Classic Rack",
      author: "Michael N. | Canada",
    },
    {
      rating: "★★★★★",
      title: "Game Changer!",
      content:
        "This bike rack has completely transformed my storage space. Super easy to install and so convenient to use. I wish I had bought it sooner!",
      product: "Wall Bike Rack",
      author: "Anna L. | Canada",
    },
    {
      rating: "★★★★☆",
      title: "Almost Perfect",
      content:
        "Great product! The only reason I’m giving 4 stars instead of 5 is that I wish it had an extra lock feature. Otherwise, it’s fantastic.",
      product: "Universal Bike Mount",
      author: "Michael D. | UK",
    },
    {
      rating: "★★★★★",
      title: "Best purchase ever!",
      content:
        "I’ve tried many bike racks before, but this one is by far the best. Sturdy, sleek, and super functional. Highly recommended!",
      product: "Pro Bike Stand",
      author: "Lisa T. | Australia",
    },
  ];

  nextReview = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.reviews.length,
      direction: "next",
    }));
  };

  prevReview = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.reviews.length) % this.reviews.length,
      direction: "prev",
    }));
  };

  render() {
    const { currentIndex, direction } = this.state;

    return (
        <div className="relative w-full py-12 px-4 md:px-0">
        
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left md:pl-4">
          What Our Customers Are Saying
        </h2>
      
        <div className="relative flex items-center justify-between">
          <div className="ml-4">
            <ButtonC text="<" onClick={this.prevReview} />
          </div>
      
          <div className="w-full flex justify-center overflow-hidden">
            <div className="relative w-full max-w-2xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  initial={{ x: direction === "next" ? "100%" : "-100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: direction === "next" ? "-100%" : "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white p-6 w-full text-center rounded-lg"
                >
                  <p className="text-xs font-bold">{this.reviews[currentIndex].rating}</p>
                  <h3 className="text-lg mt-2">{this.reviews[currentIndex].title}</h3>
                  <p className="text-xl mt-4 leading-5 font-bold">{this.reviews[currentIndex].content}</p>
                  <p className="font-semibold mt-6">{this.reviews[currentIndex].product}</p>
                  <p>{this.reviews[currentIndex].author}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
      
          <div className="mr-4">
            <ButtonC text=">" onClick={this.nextReview} />
          </div>
        </div>
      
        <div className="text-center mt-6">
          <ButtonA text="READ ALL" />
        </div>
      </div>
    );
  }
}

export default ReviewCarousel;