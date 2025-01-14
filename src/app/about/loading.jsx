export default function loading() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div
				className='w-12 h-12 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin'
				role='status'>
				<span className='sr-only'>Loading...</span>
			</div>
		</div>
	);
}
