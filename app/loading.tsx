export default function Loading() {
	return (
		<div className='w-screen h-screen bg-black flex justify-center items-center z-999'>
			<div className='w-full max-w-75 h-1/5 bg-[url(../public/loader.gif)] bg-no-repeat bg-center bg-cover z-9999'></div>
		</div>
	);
}
