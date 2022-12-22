import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Tool from './components/Tool';
import Tools from './pages/Tools';

export default function App() {
	const showTools = true;
	return (
		<div className='App bg-lam-slate'>
			<div>
				<div>
					<Header />
				</div>
				<div>
					{showTools ? (
						<div className='flex flex-col flex-wrap m-6 justify-center'>
							<Tools />
						</div>
					) : (
						<p>You cannot see the employees</p>
					)}
				</div>
				<br />
				<br />
				<br />
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
