import { useEffect } from 'react';
import '../components/css/MyProfile.css';

export default function MyProfile() {
	useEffect(() => {
		document.getElementById('cards').onmousemove = (e) => {
			console.log(e);
			for (const cardjs of document.getElementsByClassName('cardjs')) {
				const rect = cardjs.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;

				cardjs.style.setProperty('--mouse-x', `${x}px`);
				cardjs.style.setProperty('--mouse-y', `${y}px`);
			}
		};
	});

	return (
		<div
			id='body-myprofile'
			className='bg-lam-slate'>
			<div id='cards'>
				<div className='cardjs'>
					<div className='cardjs-content'>
						<div className='cardjs-image'></div>
						<div className='cardjs-info-wrapper'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='white'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='gray'
									className='w-12 h-12'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.77 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
									/>
								</svg>
							</div>
							<div>-</div>
							<div className='cardjs-info-title'>
								<h3>My Details</h3>
								<h4>Login Info</h4>
							</div>
						</div>
					</div>
				</div>
				<div className='cardjs'>
					<div className='cardjs-content'>
						<div className='cardjs-image'>
							<i className='fa-duotone fa-unicorn'></i>
						</div>
						<div className='cardjs-info-wrapper'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='white'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='gray'
									className='w-12 h-12'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
									/>
								</svg>
							</div>
							<div>-</div>
							<div className='cardjs-info'>
								<i className='fa-duotone fa-unicorn'></i>
								<div className='cardjs-info-title'>
									<h3>Tool Runs</h3>
									<h4>Upcoming and past tool runs</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='cardjs'>
					<div className='cardjs-content'>
						<div className='cardjs-image'>
							<i className='fa-duotone fa-blender-phone'></i>
						</div>
						<div className='cardjs-info-wrapper'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='white'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='gray'
									className='w-12 h-12'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
									/>
								</svg>
							</div>
							<div>-</div>
							<div className='cardjs-info'>
								<i className='fa-duotone fa-blender-phone'></i>
								<div className='cardjs-info-title'>
									<h3>My Periodic Reports</h3>
									<h4>Manage all your periodic reports</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='cardjs'>
					<div className='cardjs-content'>
						<div className='cardjs-image'>
							<i className='fa-duotone fa-person-to-portal'></i>
						</div>
						<div className='cardjs-info-wrapper'>
							<div className='cardjs-info'>
								<i className='fa-duotone fa-person-to-portal'></i>
								<div className='cardjs-info-title'>
									<h3>Adios</h3>
									<h4>See you...</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='cardjs'>
					<div className='cardjs-content'>
						<div className='cardjs-image'>
							<i className='fa-duotone fa-person-from-portal'></i>
						</div>
						<div className='cardjs-info-wrapper'>
							<div className='cardjs-info'>
								<i className='fa-duotone fa-person-from-portal'></i>
								<div className='cardjs-info-title'>
									<h3>I mean hello</h3>
									<h4>...over here.</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='cardjs'>
					<div className='cardjs-content'>
						<div className='cardjs-image'>
							<i className='fa-duotone fa-otter'></i>
						</div>
						<div className='cardjs-info-wrapper'>
							<div className='cardjs-info'>
								<i className='fa-duotone fa-otter'></i>
								<div className='cardjs-info-title'>
									<h3>Otters</h3>
									<h4>Look at me, imma cute lil fella.</h4>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>

			{/* <a
				id='source-link'
				className='link'
				href='https://linear.app/features'
				target='_blank'>
				<i className='fa-solid fa-link'></i>
				<span className='roboto-mono'>Source</span>
			</a>

			<a
				id='youtube-link'
				className='link'
				href='https://youtu.be/htGfnF1zN4g'
				target='_blank'>
				<i className='fa-brands fa-youtube'></i>
				<span>5 min Tutorial</span>
			</a> */}
		</div>
	);
}
