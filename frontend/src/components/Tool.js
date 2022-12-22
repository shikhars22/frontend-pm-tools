import RunTool from './RunTool';

export default function Tool(props) {
	return (
		<div
			className='m-2 py-8 px-12 max-w-sm min-w-sm bg-lam-sand
        rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center
        sm:space-y-0 sm:space-x-6'>
			<img
				className='object-cover rounded-full h-[150px] w-[150px] 
                block mx-auto rounded-full sm:mx-0 sm:shrink-0'
				src={props.img}
				alt=''
			/>
			<div className='text-center space-y-2 sm:text-left'>
				<div className='space-y-0.5'>
					<p className='text-lg text-black font-semibold'>{props.name}</p>
					<p className='text-slate-500 font-medium'>{props.desc}</p>
				</div>
				<RunTool name={props.name} />
				{/* <button
					className='px-4 py-1 text-sm text-emerald-600 
        font-semibold rounded-full border border-emerald-200
        hover:text-white hover:bg-emerald-300 hover:border-transparent
        focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2'>
					Run
				</button> */}
				{/* {props.editEmployee} */}
			</div>
		</div>
	);
}
