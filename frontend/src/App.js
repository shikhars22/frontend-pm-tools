import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Tool from './components/Tool';
import Tools from './pages/Tools';
import Help from './pages/Help';
import About from './pages/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/404';

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
						path='/404'
						element={<NotFound />}
					/>
				</Routes>
			</Header>
		</BrowserRouter>
	);
}
