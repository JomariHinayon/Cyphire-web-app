import React from 'react'
import aboutimage from '../assets/hero-main.png'
import OrangeCircle from '../assets/circle-orange.png'
const About = () => {
  return (
    <section id='about-section relative'>
      <div className='left-container'>
        <img src={aboutimage} alt="programming" width="600" height="500"
        className='absolute top-20 left-[-150px]'/>
        <img src={OrangeCircle} width="100" 
        className='absolute top-1/2 left-[-50px]' alt='orange-circle' />
      </div>
      <div className='right-container grid grid-cols-3'>
        <img src={OrangeCircle} width="140" 
          className='absolute top-1/4 right-[100px]' alt='orange-circle' 
        />
        <div className='left-section'></div>
        <div className='right-section col-span-2 pl-16 py-5 grid-cols-3'>
          <div className='col-span-3'>
            <h1 className='font-[500] mb-10'>FREELANCE PROGRAMMING SERVICES</h1>
          </div>
          <div className='col-span-1 pb-4'>
            <h1 className='text-5xl font-extrabold'>JUST<br/> ONE<br/> 
              <span className='text-orange-600 font-black'>CLICK</span>
            </h1>
          </div>
          <div className='col-span-2 w-[550px] text-sm font-[500]'>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sed tempore magnam quisquam nemo, voluptatum recusandae! Temporibus reprehenderit, 
              eveniet non, assumenda earum molestiae molestias aliquam dolore eligendi, accusantium 
              facilis eum eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci
               doloremque sint provident harum, labore quis modi ab, officia at itaque? Excepturi eum magnam
                quod nulla beatae, ea sequi aliquam.</p>
            <img src={OrangeCircle} width="80" 
              className='absolute bottom-12 right-[120px]' alt='orange-circle' 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About