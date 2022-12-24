import './App.css';
import Header from './components/js/Header';
import Tools from './pages/Tools';
import Help from './pages/Help';
import About from './pages/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/js/404';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';

export default function App() {
	const showTools = true;
	return (
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
				</Routes>
			</Header>
		</BrowserRouter>
	);
}
