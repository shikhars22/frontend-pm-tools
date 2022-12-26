import './App.css';
import { createContext, useEffect, useState } from 'react';
import Header from './components/js/Header';
import Tools from './pages/Tools';
import Help from './pages/Help';
import About from './pages/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/js/404';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import { apiLoginRefreshUrl, baseUrl } from './shared';
import Register from './pages/Register';
import FAQs from './components/js/FAQs';
import ContactUs from './components/js/ContactUs';

export const LoginContext = createContext();

export default function App() {
	useEffect(() => {
		function refreshTokens() {
			if (localStorage.refresh) {
				const url = baseUrl + apiLoginRefreshUrl;
				fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						refresh: localStorage.refresh,
					}),
				})
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						localStorage.access = data.access;
						localStorage.refresh = data.refresh;
						setLoggedIn(true);
					})
					.catch((e) => {
						console.log(e.message);
					});
			}
		}
		const minute = 1000 * 60;
		refreshTokens();
		setInterval(refreshTokens, minute * 3);
	}, []);

	const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);

	function changeLoggedIn(value) {
		setLoggedIn(value);
		if (value === false) {
			localStorage.clear();
		}
	}
	return (
		<LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
			<BrowserRouter>
				<Header>
					<Routes>
						<Route
							path='/tools'
							element={<Tools />}
						/>
						<Route
							path='/help'
							element={<Help />}
						/>
						<Route
							path='/contact'
							element={<ContactUs />}
						/>
						<Route
							path='/register'
							element={<Register />}
						/>
						<Route
							path='/about'
							element={<About />}
						/>
						<Route
							path='/login'
							element={<Login />}
						/>
						<Route
							path='/myprofile'
							element={<MyProfile />}
						/>
						<Route
							path='/404'
							element={<NotFound />}
						/>
						<Route
							path='*'
							element={<NotFound />}
						/>
					</Routes>
				</Header>
			</BrowserRouter>
		</LoginContext.Provider>
	);
}
