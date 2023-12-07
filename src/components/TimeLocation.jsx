import React from 'react'
import { formatToLocalTime } from '../services/weatherServices'

function TimeLocation({weather : {dt, name, country}}) {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
         {formatToLocalTime(dt)}
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white font-medium text-3xl'>{`${name}, ${country}`}</p>
      </div>
    </div>
  )
}

export default TimeLocation