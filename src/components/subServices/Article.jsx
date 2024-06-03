import './subservice.css';

export default function Article({ children }) {
	return (
		<article className='bg-white  p-4 shadow rounded hover:shadow-none cursor-pointer transition'>
			{children}
		</article>
	);
}
