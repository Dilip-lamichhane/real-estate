import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"


const About = () => {
    return (
        <motion.div
        initial={{opacity:0, x:200}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        className=' flex flex-col items-center
    container mx-auto p-14 md:px-20 lg:px32 w=full overflow-hidden'
            id='About'>
            <h1 className=' text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline
         underline-offset-4 decoration-1 under font-light'>Our Brand</span>
            </h1>
            <p className='text-grey-500 max-w-80 text-center mb-8'>Passionately committed to real estate, Devoted to your vision.</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-0'>
                
               <div className='lg:w-60% sm:w-1/2 max-w-large flex justify-center object-fit:cover'>
                
                <img src={assets.house11} alt="" className=' sm:w-1/2 max-w-large  '/> 
                
               </div>
                <div className='flex flex-col items-center md:items-start mt-10 text-green-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-grey-800'>10+</p>
                            <p>Years of Excellence</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-grey-800'>12+</p>
                            <p>Projects Completed</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-grey-800'>20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-grey-800'>25+</p>
                            <p>Ongoing Projects</p>
                        </div>

                    </div>
                    <p className='my-10 max-w-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, atque cupiditate in consequatur
                        aliquid totam. Sit, hic natus. Voluptatem quae repellendus nihil molestiae animi deserunt soluta
                        placeat aperiam voluptate! Eius, eveniet labore!</p>
                    <button className=' bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>

                </div>
            </div>
        </motion.div>
    )
}

export default About