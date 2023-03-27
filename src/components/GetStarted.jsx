import React from 'react'
import styles from '../style'
import { arrowUp } from '../asset'
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer bg-blue-gradient `}>
           <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
             <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
              <span className='text-gradient'>Get</span>
             </p>
              <img className='w-[23px] h-[23px] object-contain' src={arrowUp} alt="" />
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
              <span className='text-gradient'>Started</span>
              
             </p>
           </div>
    </div>
  )
}

export default GetStarted