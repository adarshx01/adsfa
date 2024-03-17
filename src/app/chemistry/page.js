import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='containered h-[100%] h-screen'>
            <div className="h-[100vh] pt-20" >
              <div className='bg-sky-300 grid grid-cols-2 gap-4 h-[17rem] p-8 pb-8 rounded-3xl w-[40rem] ml-2 justify-center items-center ml-[30%] '>
              <button className="button"><Link href='/buffer'>Buffer Solution</Link></button>
              <button className="button"><Link href='/balancer'>Equation Balancing</Link></button>
              <button className="button"><Link href='/equilibrium'>Equillibrium</Link></button>
              <button className="button"><Link href=''>Coming..</Link></button>
              </div>
            </div>
    </div>
  )
}

export default page