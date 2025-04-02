import React, { useState, useRef, useEffect } from "react";

const ProductSteps = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
  const stepsContainerRef = useRef(null);
  const contentContainerRef = useRef(null);
  const lastScrollPosition = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollPosition.current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          updateStepPosition();
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    const updateStepPosition = () => {
      const viewportMiddle = window.innerHeight / 2;

      const distances = [];

      stepRefs.current.forEach((stepRef, index) => {
        if (stepRef && stepRef.getBoundingClientRect) {
          const titleElement = stepRef.querySelector(".text-4xl");
          if (titleElement) {
            const titleRect = titleElement.getBoundingClientRect();
            const titleMiddle = titleRect.top + titleRect.height / 2;
            distances.push({
              index,
              distance: Math.abs(titleMiddle - viewportMiddle),
            });
          }
        }
      });

      distances.sort((a, b) => a.distance - b.distance);

      if (distances.length > 0) {
        setActiveStep(distances[0].index);
      }
      handleStepsContainerPosition();
    };

    const handleStepsContainerPosition = () => {
      if (stepsContainerRef.current && contentContainerRef.current) {
        const contentRect = contentContainerRef.current.getBoundingClientRect();
        const parentRect =
          contentContainerRef.current.parentElement.getBoundingClientRect();

        const contentTop = contentRect.top;
        const contentBottom = contentRect.bottom;
        const viewportHeight = window.innerHeight;
        const stepsHeight = stepsContainerRef.current.offsetHeight;

        const maxTop = contentRect.height - stepsHeight;
        const containerTopOffset =
          contentRect.top < 0 ? Math.abs(contentRect.top) : 0;

        let newTop = Math.min(Math.max(containerTopOffset, 0), maxTop);
        const initialPadding = 60;

        if (contentTop < initialPadding && contentBottom > viewportHeight) {
          stepsContainerRef.current.style.position = "absolute";
          stepsContainerRef.current.style.top = `${newTop}px`;
          stepsContainerRef.current.style.transition = "top 0.3s ease-out";
        } else if (contentBottom <= viewportHeight) {
          stepsContainerRef.current.style.position = "absolute";
          stepsContainerRef.current.style.top = `${maxTop}px`;
          stepsContainerRef.current.style.transition = "top 0.3s ease-out";
        } else {
          stepsContainerRef.current.style.position = "absolute";
          stepsContainerRef.current.style.top = `${initialPadding}px`;
          stepsContainerRef.current.style.transition = "top 0.3s ease-out";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    setTimeout(() => {
      updateStepPosition();
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [steps]);

  return (
    <div className="l-product-steps l-relative px-[5mm]">
      <div className="l-product-steps__container l-container">
        <div
          className="l-product-steps__desktop hidden md:flex relative"
          ref={contentContainerRef}
        >
          <div
            className="l-product-steps__steps l-flex l-flex-col w-1/4 absolute"
            ref={stepsContainerRef}
            style={{ top: "60px", transition: "top 0.3s ease-out" }}
          >
            {steps.map((step, index) => (
              <div key={index} className="mb-4">
                <span
                  className={`l-product-steps__steps-label l-block text-8xl italic font-semibold tracking-tight transition-colors duration-300 ${
                    activeStep === index ? "text-black" : "text-gray-300"
                  }`}
                  style={{ "--l-step-opacity": activeStep === index ? 1 : 0.2 }}
                  data-step-label=""
                >
                  STEP {index + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="l-product-steps__content l-flex-1 w-3/4 ml-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`l-product-steps__row ${
                  activeStep === index ? "active" : ""
                } flex flex-col mb-32`}
                data-step-content=""
              >
                <div className="mb-4">
                  <span className="text-4xl font-semibold">{step.title}</span>
                </div>
                <div className="flex flex-col">
                  <hr className="mb-16 border-t border-black" />
                  <div className="flex">
                    <div className="w-1/4">
                      <picture className="l-product-steps__row-media l-media-ratio l-block l-text-none">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full"
                        />
                      </picture>
                    </div>
                    <div className="w-3/4 ml-4">
                      <div className="l-product-steps__row-content rte mb-16">
                        {step.description
                          .split("\n")
                          .map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="l-product-steps__mobile md:hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`l-product-steps__row ${
                activeStep === index ? "active" : ""
              } flex flex-col mb-8`}
              data-step-content=""
            >
              <div className="mb-4">
                <span className="l-product-steps__row-title l-block l-text-600">
                  STEP {index + 1}: {step.title}
                </span>
              </div>
              <div className="flex flex-col">
                <hr className="mb-4 border-t border-gray-300" />
                <div className="flex flex-col">
                  <picture className="l-product-steps__row-media l-media-ratio l-block l-text-none">
                    <img src={step.image} alt={step.title} className="w-full" />
                  </picture>
                  <div className="l-product-steps__row-content rte mt-4">
                    {step.description.split("\n").map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSteps;
