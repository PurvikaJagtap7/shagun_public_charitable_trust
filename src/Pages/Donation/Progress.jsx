import React from 'react'

function Progress({ progress }) {
  const Childdiv = {
    width: `${progress}%`
  }
  return (
    <div className='h-[6px] w-[38%] bg-gray-300 rounded-[40px] mt-1 ml-[6px] '>
      <div style={Childdiv} className={`h-full bg-orange-400 rounded-[40px]`}>
      </div>
    </div>
  )
}

export default Progress
