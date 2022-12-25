import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import { apiRegister, baseUrl, homeToolsUrl } from '../shared';

export default function Register() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	const location = useLocation();
	const [loggedIn, setLoggedIn] = useContext(LoginContext);
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.clear();
		setLoggedIn(false);
	}, []);

	function register(e) {
		e.preventDefault();
		const url = baseUrl + apiRegister;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
				email: email,
			}),
		})
			.then((response) => {
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
			className='m-2 p-8 max-w-sm min-w-sm 
					bg-white rounded-xl shadow-lg space-y-2
					sm:py-4 sm:flex sm:items-center sm:space-y-0 
					sm:space-x-6 border-b-4 border-purple-700 hover:border-purple-500'>
			<form
				className='w-full max-w-sm'
				id='register'
				onSubmit={register}>
				<div className='md:flex md:items-center'>
					<div className='md:w-1/4'>
						<label for='email'>Email</label>
					</div>
					<div className='md:w-3/4'>
						<input
							id='email'
							type={'text'}
							className='m-2 block shrink min-w-0 bg-gray-300 
                                appearance-none border-2 border-gray-300 
                                rounded w-full py-2 px-4 text-gray-700 
                                leading-tight focus:outline-none 
                                focus:bg-white focus:border-purple-500'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className='md:flex md:items-center'>
					<div className='md:w-1/4'>
						<label for='username'>Username</label>
					</div>
					<div className='md:w-3/4'>
						<input
							id='username'
							type={'text'}
							className='m-2 block shrink min-w-0 bg-gray-300 
                                appearance-none border-2 border-gray-300 
                                rounded w-full py-2 px-4 text-gray-700 
                                leading-tight focus:outline-none 
                                focus:bg-white focus:border-purple-500'
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className='md:flex md:items-center mb-2'>
					<div className='md:w-1/4'>
						<label for='password'>Password</label>
					</div>
					<div className='md:w-3/4'>
						<input
							id='password'
							type={'password'}
							className='m-2 block shrink min-w-0 bg-gray-300 
                                appearance-none border-2 border-gray-300 
                                rounded w-full py-2 px-4 text-gray-700 
                                leading-tight focus:outline-none 
                                focus:bg-white focus:border-purple-500'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<button
						className='my-4 mx-2 bg-purple-500 hover:bg-purple-400 
						text-white font-bold py-2 px-4 border-b-4 
						border-purple-700 hover:border-purple-500 rounded'
						form='register'>
						Register
					</button>
				</div>
			</form>
		</div>
	);
}
