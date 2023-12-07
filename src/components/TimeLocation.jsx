import React from 'react'
import { formatToLocalTime } from '../services/weatherServices'

function TimeLocation({weather : {dt, name, country}}) {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white sm:text-xl text-base font-extralight'>
         {formatToLocalTime(dt)}
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white font-medium sm:text-3xl text-2xl'>{`${name}, ${country}`}</p>
      </div>
    </div>
  )
}

export default TimeLocation