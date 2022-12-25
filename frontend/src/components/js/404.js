import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<>
			<div className='text-white m-8'>
				<h3>The resource you are looking for is not found</h3>
			</div>
			<div>
				{' '}
				<button
					className='m-6 shadow bg-lam-mint hover:bg-white
                                    focus:shadow-outline focus:outline-none text-lam-midnight 
                                    font-bold py-2 px-4 rounded'
					onClick={() => {
						navigate('/tools/');
					}}>
					Go back to Tools Catalog ?
				</button>
			</div>
		</>
	);
}
