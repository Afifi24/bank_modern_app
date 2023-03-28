import React from 'react'
import {card} from '../asset'
import styles,{layout} from '../style'
import Button from './Button'
const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
         <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'  /> in few easy steps.</h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>arcu tortor, pursus in mattis at sed integer faucibus. aliquet quis aliquet eget mauris tortor . aliquet ultrices ac ametau</p>
      <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} className='w-[100%] h-[100%]' alt="" />
      </div>
    </section>
  )


export default CardDeal