import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import { apiLoginUrl, baseUrl, homeToolsUrl } from '../shared';

export default function Login() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const location = useLocation();
	const [loggedIn, setLoggedIn] = useContext(LoginContext);
	const navigate = useNavigate();

	function login(e) {
		e.preventDefault();
		const url = baseUrl + apiLoginUrl;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((data) => {
				localStorage.setItem('access', data.access);
				localStorage.setItem('refresh', data.refresh);
				// console.log(localStorage);
				// console.log(localStorage.state);
				// console.log(localStorage?.state?.previousUrl);
				setLoggedIn(true);
				navigate(
					location?.state?.previousUrl
						? location.state.previousUrl
						: homeToolsUrl
				);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}

	return (
		<div
			className='m-10 p-8 max-w-sm min-w-sm text-white
					bg-lam-midnight rounded-xl shadow-lg space-y-2
					sm:py-4 sm:flex sm:items-center sm:space-y-0 
					sm:space-x-6 border-b-4  border-r-4
					border-lam-mint hover:border-lam-midnight'>
			<form
				className='w-full max-w-sm'
				id='login'
				onSubmit={login}>
				<div className='md:flex md:items-center'>
					<div className='md:w-1/4'>
						<label htmlFor='username'>Username</label>
					</div>
					<div className='md:w-3/4'>
						<input
							id='username'
							type={'text'}
							className='m-2 block shrink min-w-0 bg-lam-slate 
                                appearance-none border-2 border-lam-slate
                                rounded w-full py-2 px-4 text-lam-midnight 
                                leading-tight focus:outline-none 
                                focus:bg-white focus:border-lam-mint'
							defaultValue={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className='md:flex md:items-center mb-2'>
					<div className='md:w-1/4'>
						<label htmlFor='password'>Password</label>
					</div>
					<div className='md:w-3/4'>
						<input
							id='password'
							type={'password'}
							className='m-2 block shrink min-w-0 bg-lam-slate 
                                appearance-none border-2 border-lam-slate
                                rounded w-full py-2 px-4 text-lam-midnight 
                                leading-tight focus:outline-none 
                                focus:bg-white focus:border-lam-mint'
							defaultValue={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<button
						className='m-6 shadow bg-lam-mint hover:bg-white
                                    focus:shadow-outline focus:outline-none text-lam-midnight 
                                    font-bold py-2 px-4 rounded'
						form='login'>
						Login
					</button>
				</div>
			</form>
		</div>
	);
}
