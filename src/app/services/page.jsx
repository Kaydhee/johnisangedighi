export const metadata = {
	title: 'Our Services',
};

import Image from 'next/image';
import value from '../../assets/value.webp';
import SubServices from '../../components/subServices/SubServices';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

export default function Services() {
	return (
		<section className='bg-secondary listing  w-full'>
			<Nav />
			<section className=' w-[90%] pt-[2%] service mx-auto text-black'>
				<h1 className='font-bold text-2xl sm:text-3xl md:text-5xl text-black mb-2'>
					Services
				</h1>
				<p className='text-base'>
					We provide real estate consultancy services to private and public
					sector organizations. Prior to 2007, the Firm concentrated on what
					could be called the down stream aspect of real estate sector. Having
					built confidence in the market over the years, the Firm was
					strategically re- positioned and we expanded our services to include
					properties and compensation valuation and packaging real estate
					developments cross the country, among other core services.
				</p>

				<h2>our scope of our services</h2>
				<p className='text-2xl text-black font-bold mt-2'>
					The scope of our professional services include the following:
				</p>

				<ul className='flex flex-col text-base text-black list-disc ml-4'>
					<li>valuation for various purposes</li>
					<li>property letting</li>
					<li>property sales and agency</li>
					<li>property/facility management</li>
					<li>project management</li>
					<li>pre-investment appraisal</li>
				</ul>

				<section className='border-b-2 border-black mb-[2%]'>
					<h3 className='text-black text-2xl font-bold mt-4 '>
						valuation for various purposes
					</h3>

					<div className=''>
						<p>
							Our team of experienced and seasoned Estate Surveyors and Valuers
							are capable of expressing valuation opinion on both corporeal
							assets (Land and Buildings) and incorporeal assets (Plants,
							Machineries, Furniture and Fittings) either as a separate holding
							or forming part of a going concern. We have carried out valuation
							jobs and consultancy services for private and public
							corporations/parastatals for the following purposes.
						</p>
					</div>

					<div className='flex items-center justify-between gap-4 mb-4'>
						<ul className='flex flex-col text-base text-black list-disc ml-4 '>
							<li>Mortgage Valuation</li>
							<li>Going Concern</li>
							<li>Privatization</li>
							<li>Tenement rating and collection</li>
							<li>Oil spillage and injurious affection</li>
							<li>Sales and Purchases</li>
							<li>Compulsory Acquisition and Compensation</li>
							<li>Plant and Machinery</li>
							<li>Merger, acquisition and takeover bids</li>
							<li>Insurance</li>
						</ul>

						<div className='w-[30rem] h-[15rem]'>
							<Image
								src={value}
								alt='value image'
								width={0}
								height={0}
								sizes='100%'
								style={{ width: '100%', height: '100%', borderRadius: '8px' }}
							/>
						</div>
					</div>
				</section>

				<section>
					<SubServices />
				</section>
			</section>
			<Footer />
		</section>
	);
}
