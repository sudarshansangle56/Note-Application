import React from 'react'
import Logo from '../Components/Logo'

function Dashboard() {
  return (
    <div>
      <div className='border-2 border-[#222222a7] rounded-xl p-7'>
        <h1 className='font-bold'>Welcome , Jonas Kahnwald ! </h1>
        <p>Email: xxxx@xxx.com</p>
      </div>
      <div className='h-[45px] mt-5 w-[500px] bg-[#dbdbdb] p-5 flex items-center justify-between rounded-lg'>
        <h1>Note 1</h1>
         delete button
      </div>
      <div className='h-[45px] mt-5 w-[500px] bg-[#dbdbdb] p-5 flex items-center justify-between rounded-lg'>
        <h1>Note 1</h1>
         delete button
      </div>
      <button className='w-[95%] h-[50px] rounded-lg text-white bg-blue-700 mt-9'>
        Create Note
      </button>
    </div>
  )
}

export default Dashboard
