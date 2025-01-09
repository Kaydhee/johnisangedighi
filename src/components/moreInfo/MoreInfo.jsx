import Image from 'next/image';
import hq from '../../assets/hq.jpg';

export default function MoreInfo() {
	return (
		<section className='flex flex-col sm:flex-row items-start justify-between w-[90%] mx-auto my-[10%] text-black gap-10'>
			<div className='basis-1/2'>
				<div className=''>
					<Image
						src={hq}
						alt='headquarters'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: '100%', borderRadius: '8px' }}
					/>
				</div>
			</div>

			<div className='basis-1/2'>
				<h1 className='text-4xl font-bold mb-4 text-center sm:text-start'>
					A little about us
				</h1>

				<p className='text-xl text-black text-center sm:text-start'>
					We are a firm of Estate Surveyors and Valuers carrying on business
					under the name and style of JOHN ISANGEDIGHI &amp; ASSOCIATES. We
					formally commenced operation in November 2007 as an indigenous
					company, registered with Corporate Affairs Commission, Abuja. We are a
					professional firm of Estate Surveyors and Valuers practicing with an
					operating License issued by Nigerian Institution of Estate Surveyors
					and Valuers (NIESV) and also registered by the Registration Board of
					Nigeria Institution of Estate Surveyors and Valuers (ESVARBON) to
					practice estate business throughout the Federal Republic of Nigeria.
					Prior to commencement of our operation in 2007, we concentrated on
					what could be called the downstream aspect of real estate sector.
					Having built confidence and gain reputation in the real estate market
					over the years, our company was strategically re-positioned and we
					expanded our services to include properties and compensation valuation
					and real estate development cross the country.
				</p>
			</div>
		</section>
	);
}
