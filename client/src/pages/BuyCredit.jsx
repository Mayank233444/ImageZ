// import React from 'react'
// import { assets, plans } from '../assets/assets'
// import { delay , motion } from "motion/react"

// const BuyCredit = () => {
//   return (
//     <motion.div
//     initial={{opacity:0.2 ,y:100}}
//     transition={{duration:1}}
//     whileInView={{opacity:1 , y:0}}
//     viewport={{once:true}}
//     className='min-h-[80vh] text-center pt-14 mb-10'> 
//       <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
//     Our Subscription
//       </button>
//       <h1 className='text-center text-3xl font-bold mb-6 sm:mb-10'>Choose the Subscription</h1>
//       <div className='flex flex-wrap justify-center gap-6 text-left'>{plans.map((item , index)=>(
//         <div key={index} className='bg-pink-50 drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
//           <img src={assets.logo_icon} alt="" width={40}/>
//           <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
//           <p className='text-sm'>{item.desc}</p>
//           <p className='mt-6'><span className='text-3xl'>₹{item.price} / {item.credits}</span></p>
//           <button className='w-full bg-blue-600 text-white mt-8 text-sm rounded-full py-2.5 min-w-52'>Purchase</button>
//         </div>
//       ))}
//       </div>
//     </motion.div>
    
//   )
// }

// export default BuyCredit


import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { motion } from "framer-motion";
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const BuyCredit = () => {
  const { token, backendUrl, loadCreditsData } = useContext(AppContext);

  const handleDemoPurchase = async (credits) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/add-credits`,
        { creditsToAdd: credits },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(`Purchased ${credits} credits successfully!`);
        loadCreditsData(); 
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Purchase failed.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
        Our Subscription
      </button>
      <h1 className='text-center text-3xl font-bold mb-6 sm:mb-10'>Choose the Subscription</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div key={index} className='bg-pink-50 drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
            <img src={assets.logo_icon} alt="" width={40} />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'><span className='text-3xl'>₹{item.price} / {item.credits}</span></p>
            <button
              onClick={() => handleDemoPurchase(item.credits)}
              className='w-full bg-blue-600 text-white mt-8 text-sm rounded-full py-2.5 min-w-52'
            >
              Purchase (Demo)
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
