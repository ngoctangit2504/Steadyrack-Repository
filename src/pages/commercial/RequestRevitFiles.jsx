import React from 'react'

function RequestRevitFiles() {
  return (
    <div>

    <div className='py-20 pb-18'>
     <div className='flex flex-col mx-80 px-5 justify-center items-center'>
       <h1 className=' text-5xl font-semibold tracking-tight mb-12'>Revit Files</h1>
       <p className='font-semibold tracking-tight mb-4 text-center'>Fill out the form below to gain access to download our Revit files, Bike Parking Brochure along with our Spacing and Mounting Guide.</p>
      </div>
    </div>

    <div className='pt-7 pb-14'>
      <div className='mx-12 px-5 flex flex-col justify-center items-center'>
        <form className='w-[65%]'>

         <div className='flex flex-col px-1 mb-6 w-full'>
         <label className=' tracking-tight mb-1'>Full Name *</label>
         <input type='text' className='h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5'></input>
         </div>

         <div className='flex flex-col px-1 mb-6 w-full'>
         <label className=' tracking-tight mb-1'>Email *</label>
         <input type='text' className='h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5'></input>
         </div>

         <div className='flex flex-row'>
           <div className='flex flex-col px-1 mb-6 w-full'>
           <label className=' tracking-tight mb-1'>Phone *</label>
           <input type='text' className='h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5'></input>
           </div>

           <div className='flex flex-col px-1 mb-6 w-full'>
           <label className=' tracking-tight mb-1'>Company</label>
           <input type='text' className='h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5' placeholder='Please select'></input>
           </div>
         </div>

         <div className='flex flex-row'>
           <div className='flex flex-col px-1 mb-6 w-full'>
           <label className=' tracking-tight mb-1'>Country</label>
           <input type='text' className='h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5'></input>
           </div>

           <div className='flex flex-col px-1 mb-6 w-full'>
           <label className=' tracking-tight mb-1'>I AM A:</label>
           <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input type="radio" id="option1" name="options" className="w-5 h-5 accent-black"/>
              <label htmlFor="option1" className="text-gray-700 font-medium">ARCHITECT/DESIGNER</label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="radio" id="option2" name="options" className="w-5 h-5 accent-black"/>
              <label htmlFor="option2" className="text-gray-700 font-medium">INTERIOR DESIGNER</label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="radio" id="option3" name="options" className="w-5 h-5 accent-black"/>
              <label htmlFor="option3" className="text-gray-700 font-medium">BUILDING OWNER</label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="radio" id="option4" name="options" className="w-5 h-5 accent-black"/>
              <label htmlFor="option4" className="text-gray-700 font-medium">FACILITY MANAGER</label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="radio" id="option5" name="options" className="w-5 h-5 accent-black"/>
              <label htmlFor="option5" className="text-gray-700 font-medium">OTHER</label>
            </div>
        </div>

     </div>
         </div>

         <div className='flex flex-col px-1 mb-6 w-full'>
         <label className=' tracking-tight mb-1'>Project Name/Details</label>
         <textarea type='text' className='h-28 rounded-lg shadow-lg bg-gray-100 shadow-gray-200 p-5'></textarea>
         </div>

         <div className='flex flex-col px-1 mb-6'>
         <button type='submit' className='bg-black text-white rounded-full h-10 w-28'>Send</button>
         </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default RequestRevitFiles