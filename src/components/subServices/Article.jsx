import './subservice.css';

export default function Article({ children }) {
	return (
		<article className='bg-black  p-4 shadow rounded hover:shadow-none cursor-pointer transition'>
			{children}
		</article>
	);
}
