import React from "react";

function Return() {
  return (
    <div>
      <div className="py-20 pb-18">
        <div className="flex flex-col mx-80 px-5">
          <h1 className=" text-5xl font-semibold tracking-tight mb-4">
            Returns
          </h1>
          <p className="  tracking-tight mb-4">
            If you are not happy with your Steadyrack product, it may be
            returned to us provided it meets the following criteria:
          </p>
          <p className="  tracking-tight mb-1">
            1. It is within 30 days of receiving the product
          </p>
          <p className="  tracking-tight mb-1">
            2. It was purchased from this website (steadyrack.com)
          </p>
          <p className=" tracking-tight mb-1">
            3. It is the current style or design
          </p>
          <p className="  tracking-tight mb-1">
            4. It is in new, unused, resaleable condition in original packaging
          </p>
          <p className="  tracking-tight mb-4">
            5. We have been notified of the return beforehand and provided you
            with a return address
          </p>

          <p className=" tracking-tight mb-4">
            Once we have received the Steadyrack(s) your refund will be
            processed if it meets the above criteria. Please note, the Buyer
            will be responsible for all shipping costs associated with the
            return. A flat rate fee of $10 per unit will apply. The refund will
            be issued for the returned items only.
          </p>

          <p className="  tracking-tight mb-4">
            Submit the returns form below. You will then be given an address to
            return your Steadyrack(s).
          </p>
          <p className=" font-bold  tracking-tight mb-4">
            *Unfortunately we cannot accept returns for purchases made elsewhere
            - please contact your original point of purchase to return your
            Steadyrack. Warranty claims excepted – select Warranty Claim below.
          </p>
          <p className=" font-bold tracking-tight mb-4">
            *Once an order has been processed it cannot be cancelled and the
            item must instead be returned to Steadyrack in accordance with the
            returns policy. For more information, visit our Terms of Service.
          </p>
        </div>
      </div>

      <div className="pt-7 pb-14">
        <div className="mx-12 px-5 flex flex-col justify-center items-center">
          <form className="w-[65%]">
            <div className="mb-8">
              <h1 className=" font-semibold tracking-tight text-4xl">
                Returns and Warranty Claims Form
              </h1>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className="tracking-tight mb-1">
                IS THIS A WARRANTY CLAIM?
              </label>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="option1"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option1">YES</label>
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col px-1 mb-6 w-full">
                <label className=" tracking-tight mb-1">
                  YOUR ORDER NUMBER
                </label>
                <input
                  type="text"
                  className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
                ></input>
              </div>

              <div className="flex flex-col px-1 mb-6 w-full">
                <label className=" tracking-tight mb-1">NAME</label>
                <input
                  type="text"
                  className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
                ></input>
              </div>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">EMAIL</label>
              <input
                type="text"
                className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
              ></input>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">PHONE NUMBER</label>
              <input
                type="text"
                className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
              ></input>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">MESSAGE</label>
              <textarea
                type="text"
                className="h-28 rounded-lg shadow-lg bg-gray-100 shadow-gray-200 p-5"
              ></textarea>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">REASON FOR RETURN</label>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option1" className="">
                    I CHANGED MY MIND
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option2" className="">
                    I PURCHASED THE WRONG STEADYRACK PRODUCT
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option3" className="">
                    MY BIKE(S) DID NOT FIT IN THE STEADYRACK(S)
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="option4"
                    name="options"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option4" className="">
                    I COULD NOT INSTALL MY STEADYRACK(S)
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="option5"
                    name="options"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option5" className="">
                    OTHER (PLEASE SPECIFY IN MESSAGE)
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className="tracking-tight mb-1">I AGREE THAT:</label>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="option1"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option1">
                    MY STEADYRACK(S) HAS NOT BEEN INSTALLED AND IS IN NEW,
                    UNUSED CONDITION
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="option2"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option2">
                    I RECEIVED MY STEADYRACK(S) LESS THAN 30 DAYS AGO
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="option3"
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="option3">
                    I UNDERSTAND THE TERMS AND CONDITIONS OF STEADYRACK'S RETURN
                    POLICY
                  </label>
                </div>
              </div>
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

export default Return;
