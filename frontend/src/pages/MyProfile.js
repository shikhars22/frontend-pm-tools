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
						<div className='cardjs-image'>
							<i className='fa-duotone fa-user'></i>
						</div>
						<div className='cardjs-info-wrapper'>
							<div className='cardjs-info'>
								<i className='fa-duotone fa-user'></i>
								<div className='cardjs-info-title'>
									<h3>My Details</h3>
									<h4>Login Info</h4>
								</div>
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
							<div className='cardjs-info'>
								<i className='fa-duotone fa-blender-phone'></i>
								<div className='cardjs-info-title'>
									<h3>My Subscriptions</h3>
									<h4>Manage all your subscriptions</h4>
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
