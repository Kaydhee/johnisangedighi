// "use client";
// import { motion } from "framer-motion";

// import Image from "next/image";
// import Link from "next/link";

// import HQ from "../../assets/background.jpg";
// import { Ri24HoursFill } from "react-icons/ri";
// import { IoIosDocument } from "react-icons/io";
// import { MdVerifiedUser } from "react-icons/md";
// import { FaNairaSign, FaArrowRightLong } from "react-icons/fa6";

// export default function WhatWeDo() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="w-[90%] mx-auto py-20"
//     >
//       <section className="flex flex-col md:flex-row items-center gap-16">
//         {/* IMAGE SIDE */}
//         <div className="basis-2/4 flex justify-center">
//           <div className="relative w-full md:w-[80%] h-[32rem] rounded-[30px] shadow-[15px_15px_30px_#c5cbe3,-15px_-15px_30px_#ffffff] p-5">
//             <Image
//               src={HQ}
//               alt="property image"
//               fill
//               className="object-cover rounded-[25px]"
//             />

//             <Link
//               href="/about"
//               className="absolute -bottom-6 -right-6 w-20 h-20 flex items-center justify-center rounded-full bg-[#e9eef5] text-black text-2xl shadow-[10px_10px_20px_#c5cbe3,-10px_-10px_20px_#ffffff] hover:shadow-[inset_8px_8px_15px_#c5cbe3,inset_-8px_-8px_15px_#ffffff] transition-all duration-300"
//             >
//               <FaArrowRightLong />
//             </Link>
//           </div>
//         </div>

//         {/* TEXT SIDE */}
//         <div className="basis-2/4">
//           <h3 className="text-5xl font-bold mb-4 text-gray-800">What We Do</h3>

//           <p className="text-3xl font-semibold mb-6 text-gray-600">
//             Why you should choose us?
//           </p>

//           <p className="text-gray-500 leading-relaxed mb-8">
//             We provide real estate consultancy services to private and public
//             sector organizations. Prior to 2007, the Firm concentrated on what
//             could be called the downstream aspect of the real estate sector.
//           </p>

//           {/* FEATURE LIST */}
//           <div className="space-y-6">
//             {[
//               {
//                 icon: <Ri24HoursFill />,
//                 text: "Find your next property in 24 hours",
//               },
//               { icon: <IoIosDocument />, text: "Rental agreements" },
//               { icon: <MdVerifiedUser />, text: "Life-time guarantee" },
//               { icon: <FaNairaSign />, text: "House within your budget" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-6 p-5 rounded-2xl bg-[#e9eef5] shadow-[10px_10px_20px_#c5cbe3,-10px_-10px_20px_#ffffff] hover:shadow-[inset_8px_8px_15px_#c5cbe3,inset_-8px_-8px_15px_#ffffff] transition-all duration-300 cursor-pointer"
//               >
//                 <div className="text-2xl text-indigo-500">{item.icon}</div>
//                 <p className="text-lg font-medium text-gray-700">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HQ from "../../assets/background.jpg";
import { Ri24HoursFill } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { FaNairaSign, FaArrowRightLong } from "react-icons/fa6";

export default function WhatWeDo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[90%] mx-auto py-24"
    >
      <section className="flex flex-col md:flex-row items-center gap-20">
        {/* IMAGE */}
        <div className="w-full md:basis-2/4 flex justify-center">
          <div className="relative w-full md:w-[80%] h-[32rem] rounded-[30px] bg-white shadow-[10px_10px_25px_#d9d9d9,-10px_-10px_25px_#ffffff] p-6">
            <Image
              src={HQ}
              alt="property image"
              fill
              className="object-cover rounded-[24px]"
            />

            <Link
              href="/about"
              className="absolute -bottom-6 -right-6 w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-[6px_6px_15px_#d9d9d9,-6px_-6px_15px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d9d9d9,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 text-black"
            >
              <FaArrowRightLong />
            </Link>
          </div>
        </div>

        {/* TEXT */}
        <div className="basis-2/4">
          <h3 className="text-5xl font-bold text-[#1a1a1a] mb-6">What We Do</h3>

          <p className="text-3xl font-semibold text-[#333] mb-6">
            Why you should choose us?
          </p>

          <p className="text-[#666] leading-relaxed mb-10">
            We provide real estate consultancy services to private and public
            sector organizations. Prior to 2007, the Firm concentrated on the
            downstream aspect of the real estate sector.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: <Ri24HoursFill />,
                text: "Find your next property in 24 hours",
              },
              { icon: <IoIosDocument />, text: "Rental agreements" },
              { icon: <MdVerifiedUser />, text: "Life-time guarantee" },
              { icon: <FaNairaSign />, text: "House within your budget" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-[6px_6px_15px_#d9d9d9,-6px_-6px_15px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d9d9d9,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
              >
                <div className="text-xl text-[#1a1a1a]">{item.icon}</div>

                <p className="text-lg font-medium text-[#333]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
}
