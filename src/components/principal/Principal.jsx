'use client';

import Image from 'next/image';
// import principal from '../../assets/John Isangedighi.jpe';
import hq from '../../assets/hq.jpg';
import { motion } from 'framer-motion';

export default function Principal() {
	return (
		<motion.section
			initial={{ y: -70 }}
			whileInView={{ y: 0 }}
			viewport={{ once: false, amount: 0.5 }}
			transition={{ type: 'spring', stiffness: 300 }}
			className='flex flex-col sm:flex-row items-center justify-between w-[90%] mx-auto my-[7%]  text-black gap-10'>
			<div className='basis-1/2'>
				<Image
					src={hq}
					alt='principal partner'
					width={0}
					height={0}
					sizes='100%'
					style={{ width: '100%', height: '100%' }}
				/>
			</div>

			<div className='basis-1/2'>
				<p>
					John Isangedighi and Associates is a consummate professional firm with
					over 15years experience, practicing estate surveying and valuation
					across the length and breadth of Nigeria and beyond. We are a
					responsible and responsive corporate organization with the
					professional edge of providing effective and efficient service
					delivery to our esteemed clients. We pledge to constantly renew and
					strengthen our trust with clients, partners and stakeholders. Being
					our profession of first choice, we pursue the highest performance by
					continually innovating and applying ingenuity to management, buying
					and selling of properties, as well as in the execution of valuations
					jobs and projects. It is our company policy to transact business at
					top level of ethical considerations. Hence, we encourage our staff to
					be guided by integrity in their dealings with clients and the public
					in general. Also, we strongly believe that one way of attracting and
					growing clientele is through first class service delivery.
					Consequently, we go extra miles to render satisfactory service to our
					clients. These are the guiding philosophy behind the fast pace of
					growth and expansion of John Isangedighi and Associates within the
					short period of our existence. As the Head of Practice of John
					Isangedighi and Associates, I want our company and staff to be
					recognised for our untiring commitment to excellence in service.
				</p>
			</div>
		</motion.section>
	);
}
