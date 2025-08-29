// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

//         <div>
//             <img src={assets.logo} className='mb-5 w-32' alt="" />
//             <p className='w-full md:w-2/3 text-gray-600'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//             </p>
//         </div>

//         <div>
//             <p className='text-xl font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy policy</li>
//             </ul>
//         </div>

//         <div>
//             <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>+2348158007072</li>
//                 <li>contact@foreveryou.com</li>
//             </ul>
//         </div>

//       </div>

//         <div>
//             <hr />
//             <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
//         </div>

//     </div>
//   )
// }

// export default Footer


import { assets } from '../assets/assets'
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-50">   {/* ✅ Added background color */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            FootScanner brings you stylish and durable footwear designed for every step of your journey. 
            From timeless classics to trendy designs, we make sure comfort meets elegance in every pair.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500 text-lg" />
              +2348158007072
            </li>
            <li className="flex items-center gap-2">
              <SiGmail className="text-red-500 text-lg" />
              footscannercontact@gmail.com
            </li>
          </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-600'>
              Copyright @2025 - All Right Reserved.
            </p>
        </div>

    </div>
  )
}

export default Footer
