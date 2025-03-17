import React from 'react';
import ButtonA from '../../components/buttons/ButtonA';

function Reviews() {
  return (
    <div className='text-center py-24 px-4 min-h-[70vh] flex flex-col justify-center items-center'>
  <p className='text-6xl font-bold mb-12'>404</p>
  <hr className='w-24 border-t-2 border-gray-300 mb-12'/>
  <p className='text-xl mb-12'>This page does not exist.</p>
  <ButtonA text={"BACK TO HOME"} onClick={() => window.location.href = "/"}/>
</div>
  )
}

export default Reviews