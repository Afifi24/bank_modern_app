import React from 'react'
import {clients} from '../constants'
import styles from '../style'
const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
       <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map(client=>(
            <div className={`flex-1  ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} key={client.id}>
               <img className='sm:w-[192px] w-[100px] object-contain' src={client.logo} alt="" />
            </div>
          ))
        }
       </div>
    </section>
  )


export default Clients