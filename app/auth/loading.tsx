export default function Loader() {
	return (
		<div className='w-screen h-screen flex justify-center items-center z-999'>
			<div className='w-full max-w-75 h-1/5 bg-[url(@/public/loader.gif)] bg-no-repeat bg-center bg-cover z-9999'></div>
		</div>
	);
}
