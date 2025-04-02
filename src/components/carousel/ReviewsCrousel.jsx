import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        (prevState.currentIndex - 1 + this.reviews.length) %
        this.reviews.length,
      direction: "prev",
    }));
  };

  render() {
    const { currentIndex, direction } = this.state;

    return (
      <div>
        <div data-aos="fade-up" className="relative w-full py-20 px-4 md:px-0">
          <div className="mb-6 md:pl-4">
            {" "}
            {/* Khối riêng cho tiêu đề */}
            <h2 className="text-4xl font-semibold text-center md:text-left">
              What Our Customers Are Saying
            </h2>
          </div>

          <div className="relative flex items-center justify-between mt-16">
            <div className="ml-4">
              <button
                onClick={this.prevReview}
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="w-full flex justify-center overflow-hidden">
              <div className="relative w-full max-w-2xl">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    initial={{ x: direction === "next" ? "100%" : "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: direction === "next" ? "-100%" : "100%" }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="bg-white w-full text-center rounded-lg"
                  >
                    <p className="text-xs font-bold">
                      {this.reviews[currentIndex].rating}
                    </p>
                    <h3 className="text-xl mt-2">
                      {this.reviews[currentIndex].title}
                    </h3>
                    <p className="text-xl mt-4 leading-5 font-semibold">
                      {this.reviews[currentIndex].content}
                    </p>
                    <p className="mt-6 mb-2.5 underline">
                      {this.reviews[currentIndex].product}
                    </p>
                    <p>{this.reviews[currentIndex].author}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mr-4">
              <button
                onClick={this.nextReview}
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-white text-black py-3.5 px-5 rounded-full border-2 border-black font-semibold hover:bg-red-700 hover:text-white hover:border-white transition">
              READ ALL
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewCarousel;
