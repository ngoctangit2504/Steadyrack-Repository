import React from 'react'

function CommercialEnquiries() {
  return (
    <div>

<div className='py-20 pb-18'>
     <div className='flex flex-col mx-80 px-5 justify-center items-center'>
       <h1 className=' text-5xl font-semibold tracking-tight mb-12'>Commercial Enquiries</h1>
       <p className=' font-semibold tracking-tight mb-4'>Whether you're looking for a quote for your commercial project, spacing and layout guidance, or wish to discuss an upcoming project, we are here to help. Please fill out this form and our Sales team will be in touch.</p>

       <div className='flex flex-row'>
       <span className=' font-bold'>Phone:</span>
       <p className=' font-semibold tracking-tight underline'> +61 8 9435 2435</p>
       </div>
       
       <div className='flex flex-row'>
       <span className=' font-bold'>Facebook Messenger:</span>
       <p className='tracking-tight mb-4 underline'> Facebook.com/steadyrack</p>
       </div>

       <p className='tracking-tight font-bold'>Visit us:</p>
       <p className='tracking-tight mb-4'>46 Discovery Drive, Bibra Lake, WA, 6163</p>
       <p className=' font-bold tracking-tight'>Opening hours:</p>
       <p className='tracking-tight mb-4'>Monday to Friday, 9am - 5pm AWST (Australian Western Standard Time)</p>
       <p className=' tracking-tight text-center'>Our Customer Support team are based in Western Australia and will respond to your inquiry as soon as possible during open hours.</p>

      </div>
    </div>
    
    <div className='pt-7 pb-14'>
      <div className='mx-12 px-5 flex flex-col justify-center items-center'>
        <form className='w-[65%]'>
         <div className='flex flex-col px-1 mb-6 w-full'>
         <label className=' tracking-tight mb-1'>Company Name *</label>
         <input type='text' className='h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5'></input>
         </div>

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
           <label className=' tracking-tight mb-1'>Country *</label>
           <input type='text' className='h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5' placeholder='Please select'></input>
           </div>
         </div>

         <div className='flex flex-col px-1 mb-6 w-full'>
         <label className=' tracking-tight mb-1'>Commercial Enquiry Type *</label>
         <input type='text' className='h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5' placeholder='Please select'></input>
         </div>

         <div className='flex flex-col px-1 mb-6 w-full'>
         <label className=' tracking-tight mb-1'>Message</label>
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

export default CommercialEnquiries