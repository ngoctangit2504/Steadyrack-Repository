import React from "react";

function BecomeADealer() {
  return (
    <div>
      <div className="py-20 pb-18">
        <div className="flex flex-col mx-80 px-5">
          <h1 className=" text-5xl font-semibold tracking-tight mb-12">
            Become A Dealer
          </h1>
          <p className=" font-semibold tracking-tight mb-4">
            We work with dealers all over the world. From Canada to Colombia,
            the United States to the United Kingdom, Switzerland to New Zealand
            and everywhere in between.
          </p>
          <p className=" font-semibold tracking-tight mb-4">
            Our authorized dealers promote and sell Steadyrack online and in
            store, along with featuring in their window displays, storage areas,
            workshops and showrooms.
          </p>
          <p className=" font-bold tracking-tight mb-4 underline">
            For United States Dealer Support contact:
          </p>
          <p className=" font-semibold tracking-tight mb-4">Steadyrack USA</p>
          <a className="text-red-600 underline mb-4">usasales@steadyrack.com</a>
          <p className=" font-semibold tracking-tight mb-4">
            If you’re interested in working with the best bike parking solution
            available, fill out the short form below and we’ll be in touch soon
            after that.
          </p>
        </div>
      </div>

      <div className="pt-7 pb-14">
        <div className="mx-12 px-5 flex flex-col justify-center items-center">
          <form className="w-[65%]">
            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">Company Name *</label>
              <input
                type="text"
                className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
              ></input>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">Full Name *</label>
              <input
                type="text"
                className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
              ></input>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">Email *</label>
              <input
                type="text"
                className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
              ></input>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col px-1 mb-6 w-full">
                <label className=" tracking-tight mb-1">Phone *</label>
                <input
                  type="text"
                  className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
                ></input>
              </div>

              <div className="flex flex-col px-1 mb-6 w-full">
                <label className=" tracking-tight mb-1">Country *</label>
                <input
                  type="text"
                  className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
                  placeholder="Please select"
                ></input>
              </div>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">Enquiry type *</label>
              <input
                type="text"
                className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
                placeholder="Please select"
              ></input>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">Message</label>
              <textarea
                type="text"
                className="h-28 rounded-lg shadow-lg bg-gray-100 shadow-gray-200 p-5"
              ></textarea>
            </div>

            <div className="flex flex-col px-1 mb-6">
              <button
                type="submit"
                className="bg-black text-white rounded-full h-10 w-28"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BecomeADealer;
