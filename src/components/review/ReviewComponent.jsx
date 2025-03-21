import React from "react";

const ReviewComponent = () => {
  return (
    <div className="bg-white p-2 sm:p-4 w-full max-w-7xl mx-auto">
      {/* Phần đánh giá sao và số điểm */}
      <div className="flex flex-col sm:flex-row sm:items-center mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <span className="text-2xl font-semibold mr-2">5.0</span>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 sm:w-5 sm:h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
        <span className="text-xs sm:text-sm sm:ml-2">Based on 3 reviews</span>
      </div>

      {/* Thanh đánh giá chi tiết */}
      <div className="space-y-2 mb-4 justify-start">
        <div className="flex items-center w-full sm:w-96">
          <span className="text-xs sm:text-sm font-medium w-10 sm:w-16 text-left">5 ★</span>
          <div className="flex-1 bg-gray-200 h-2 rounded-full">
            <div className="bg-black h-2 rounded-full w-full"></div>
          </div>
          <span className="text-xs sm:text-sm font-medium ml-2">3</span>
        </div>

        <div className="flex items-center w-full sm:w-96">
          <span className="text-xs sm:text-sm font-medium w-10 sm:w-16">4 ★</span>
          <div className="flex-1 bg-gray-200 h-2 rounded-full">
            <div className="bg-gray-200 h-2 rounded-full w-0"></div>
          </div>
          <span className="text-xs sm:text-sm font-medium ml-2">0</span>
        </div>
        <div className="flex items-center w-full sm:w-96">
          <span className="text-xs sm:text-sm font-medium w-10 sm:w-16">3 ★</span>
          <div className="flex-1 bg-gray-200 h-2 rounded-full">
            <div className="bg-gray-200 h-2 rounded-full w-0"></div>
          </div>
          <span className="text-xs sm:text-sm font-medium ml-2">0</span>
        </div>
        <div className="flex items-center w-full sm:w-96">
          <span className="text-xs sm:text-sm font-medium w-10 sm:w-16">2 ★</span>
          <div className="flex-1 bg-gray-200 h-2 rounded-full">
            <div className="bg-gray-200 h-2 rounded-full w-0"></div>
          </div>
          <span className="text-xs sm:text-sm font-medium ml-2">0</span>
        </div>
        <div className="flex items-center w-full sm:w-96">
          <span className="text-xs sm:text-sm font-medium w-10 sm:w-16">1 ★</span>
          <div className="flex-1 bg-gray-200 h-2 rounded-full">
            <div className="bg-gray-200 h-2 rounded-full w-0"></div>
          </div>
          <span className="text-xs sm:text-sm font-medium ml-2">0</span>
        </div>
      </div>

      {/* Reviews (3) Questions (4) */}
      <div className="flex space-x-4 mb-4">
        <span className="text-xs sm:text-sm font-semibold">Reviews (3)</span>
        <span className="text-xs sm:text-sm font-semibold">Questions (4)</span>
      </div>

      {/* Nút FILTERS và WRITE A REVIEW */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
        <button className="bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
          FILTERS
        </button>
        <a
          href="https://okendo.reviews/?subscriberId=bf0a756c-5b2b-42a4-a569-7b9f9aae5b01&productId=shopify-9734115393821&locale=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            WRITE A REVIEW
          </button>
        </a>
      </div>

      {/* Phần "Sort" và "Most Helpful" */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs sm:text-sm">3 reviews</span>
        <div className="flex items-center">
          <span className="text-xs sm:text-sm mr-1 sm:mr-2 font-semibold">Sort</span>
          <select className="rounded-md px-1 py-0.5 sm:px-2 sm:py-1 text-xs sm:text-sm font-semibold text-black hover:border-black">
            <option>Most Helpful</option>
            <option>Newest</option>
            <option>Most Helpful</option>
            <option>Newest</option>
            <option>Most Helpful</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Phần thông tin đánh giá chi tiết */}
      <div className="border-t pt-4">
        {/* Đánh giá 1 */}
        <div className="flex flex-col sm:flex-row items-start mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white mr-3 sm:mr-6 flex items-center justify-center mb-3 sm:mb-0">
            <span className="text-sm sm:text-md font-semibold">DH</span>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-6">
            <div className="col-span-1">
              <div className="flex flex-col items-start">
                <span className="font-semibold text-xs sm:text-sm">DALE H.</span>
                <div className="flex items-center mt-1 sm:mt-2">
                  <span className="text-xxs sm:text-xs text-red-500 font-bold mr-1">
                    Verified Buyer
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mt-2 sm:mt-3">
                  <p className="text-xs sm:text-sm">I recommend this product</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-4 mt-3 sm:mt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-xxs sm:text-xs text-gray-500">Yesterday</div>
              </div>
              <p className="mt-3 sm:mt-6 text-lg sm:text-xl">Sweet As ...</p>
              <p className="text-xs sm:text-sm mt-3 sm:mt-6">best ever</p>
              <div className="flex items-center justify-end mt-2 sm:mt-3">
                <span className="text-xxs sm:text-xs text-gray-500 mr-1 sm:mr-2">
                  Was this helpful?
                </span>
                <button className="text-xxs sm:text-xs text-gray-500 mr-1"></button>
                <span className="text-xxs sm:text-xs text-gray-500 mr-1 sm:mr-2">0</span>
                <button className="text-xxs sm:text-xs text-gray-500 mr-1"></button>
                <span className="text-xxs sm:text-xs text-gray-500">0</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-4 sm:mt-6 border-t border-gray-300" />

        {/* Đánh giá 2 */}
        <div className="flex flex-col sm:flex-row items-start mb-6 pt-4 sm:pt-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black mr-3 sm:mr-6 flex items-center justify-center mb-3 sm:mb-0">
            <span className="text-sm sm:text-md bg-black text-white font-semibold">
              MS
            </span>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-6">
            <div className="col-span-1">
              <div className="flex flex-col items-start">
                <span className="font-semibold text-xs sm:text-sm">Mike S.</span>
                <div className="flex items-center mt-1 sm:mt-2">
                  <span className="text-xxs sm:text-xs text-red-500 font-bold mr-1">
                    Verified Reviewer
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mt-2 sm:mt-3">
                  <p className="text-xs sm:text-sm">I recommend this product</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-4 mt-3 sm:mt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-xxs sm:text-xs text-gray-500">9 weeks ago</div>
              </div>
              <p className="mt-3 sm:mt-6 text-lg sm:text-xl">Love The Pro Display</p>
              <p className="text-xs sm:text-sm mt-3 sm:mt-6">
                Love my new ProFlex rack! Looks great and does the job. The
                quality of the components is obvious. Installation is pretty
                straight forward so long as you're comfortable using a 10mm
                drill bit. I went for the GearMate bundle too, which makes for a
                complete setup for my two-wheeled pride & joy.
              </p>
              <div className="flex items-center justify-end mt-2 sm:mt-3">
                <span className="text-xxs sm:text-xs text-gray-500 mr-1 sm:mr-2">
                  Was this helpful?
                </span>
                <button className="text-xxs sm:text-xs text-gray-500 mr-1"></button>
                <span className="text-xxs sm:text-xs text-gray-500 mr-1 sm:mr-2">1</span>
                <button className="text-xxs sm:text-xs text-gray-500 mr-1"></button>
                <span className="text-xxs sm:text-xs text-gray-500">0</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-4 sm:mt-6 border-t border-gray-300" />
      </div>
    </div>
  );
};

export default ReviewComponent;