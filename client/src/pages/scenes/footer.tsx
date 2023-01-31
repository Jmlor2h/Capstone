import React from 'react'
import Logo from '../assets/images/Logo.png'




type Props = {}

const Footer = () => {
  return (
    <footer className='bg-primary5 py-24 text-ally7 bg-ally10  ' >
    <div className='justify-content mx-auto w-5/6 gap-16 xs:flex '>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img alt='Logo' src={Logo} className='w-32 bg-primary4'/>
            <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur? Nostrum accusantium tenetur quaerat harum aliquid.
             Exercitationem alias velit quasi, distinctio eveniet blanditiis neque veniam deleniti culpa pariatur, vero harum.</p>
            <p>© Mentally 2023 All rights Partially Reserved</p>
        </div>
        <div className=' mt-8 basis-1/4 sm:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>lorem</p>
            <p className='my-5'>lorem</p>
            <p className='my-5'>lorem</p>
        </div>
        <div> 
            <h4 className='mt-8 basis-1/4 sm:mt-0'>Contact Us</h4>
            <p className='my-5'>lorem</p>
            <p className='my-5'>lorem</p>
         </div>
    </div>
    </footer>
  )
}


export default Footer