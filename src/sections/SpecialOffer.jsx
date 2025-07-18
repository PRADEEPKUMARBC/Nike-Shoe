import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = ({label, iconURL }) => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
      <img src={offer} width={773} height={687} className='object-contain w-full ' />
</div>
      <div className="grid grid-col-2">
      <h2 className=" font-palanquin text-4xl capatalize font-bold lg:max-w-lg ">
        <span className="text-coral-red"> Special  </span>
      
        Offer
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
      </p>
      <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.</p>
      <div className="mt-11 flex flex-wrap gap-4">
        <Button label='Shop now' iconURL={arrowRight} />
        <Button label="Learn More" 
        backgroundColor="bg-white"
        border-color="border-slate-gray" 
        text-color="text-slate-gray"  
        />
      </div>
      


      </div>
      
    </section>
  )
}

export default SpecialOffer

