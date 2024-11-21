import Image from 'next/image';
import logo from '../../assets/logo.png';

const Logo = () => {
	return (
		<div className='w-[2rem] py-3 cursor-pointer'>
			<Image
				src={logo}
				alt='company logo'
				width={0}
				height={0}
				sizes='100%'
				style={{ width: '100%', height: 'auto' }}
			/>
		</div>
	);
};

export default Logo;
