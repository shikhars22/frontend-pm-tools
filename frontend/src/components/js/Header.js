import { Fragment, useContext } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import Lam_Research_logo_White from '../../images/logoWhite.png';
import Lam_Research_logo_midnight from '../../images/logoDark.png';
import defaultAvatar from '../../images/defaultAvatar.png';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../App';

const navigation = [
	{ name: 'About', href: '/about' },
	{ name: 'Tool Catalog', href: '/tools' },
	{ name: 'Help', href: '/help' },
	{ name: 'Contact Us', href: '/contact' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Header(props) {
	const [loggedIn, setLoggedIn] = useContext(LoginContext);

	return (
		<div>
			<Disclosure
				as='nav'
				className='bg-lam-mint sticky top-0'>
				{({ open }) => (
					<>
						<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
							<div className='relative flex h-16 items-center justify-between'>
								<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
									{/* Mobile menu button*/}
									<Disclosure.Button
										className='inline-flex items-center justify-center
									 rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white
									 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XMarkIcon
												className='block h-6 w-6'
												aria-hidden='true'
											/>
										) : (
											<Bars3Icon
												className='block h-6 w-6'
												aria-hidden='true'
											/>
										)}
									</Disclosure.Button>
								</div>
								<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
									<div className='flex flex-shrink-0 items-center'>
										{/* <img
										className='block h-8 w-auto '
										src={Lam_Research_logo_White}
										alt='Your Company'
									/> */}
										<img
											// className='hidden h-8 w-auto lg:block'
											className='block h-10 w-auto '
											src={Lam_Research_logo_midnight}
											alt='Your Company'
										/>
									</div>
									<div className='hidden sm:ml-6 sm:block'>
										<div className='flex space-x-4'>
											{navigation.map((item) => (
												<NavLink
													key={item.name}
													to={item.href}
													className={({ isActive }) => {
														// console.log(item.href + ' ' + isActive);
														return (
															'no-underline px-3 py-2 rounded-md text-sm font-medium ' +
															(!isActive
																? ' no-underline text-lam-midnight hover:bg-gray-700 hover:text-white'
																: ' bg-gray-900 text-white')
														);
													}}>
													{item.name}
												</NavLink>
											))}
										</div>
									</div>
								</div>
								<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
									{/* <button
									type='button'
									className='rounded-full bg-gray-800 p-1 
									text-gray-400 hover:text-white
									focus:outline-none focus:ring-2 focus:ring-white
									focus:ring-offset-2 focus:ring-offset-gray-800'>
									<span className='sr-only'>View notifications</span>
									<BellIcon
										className='h-6 w-6'
										aria-hidden='true'
									/>
								</button> */}
									<Menu
										as='div'
										className='relative ml-3'>
										<div>
											<Menu.Button
												className='flex rounded-full bg-lam-midnight text-sm hover:ring-2 
												hover:ring-gray-900
											focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
											focus:ring-offset-lam-midnight'>
												<span className='sr-only'>Open user menu</span>
												<img
													className='h-10 w-10 rounded-full'
													src={defaultAvatar}
													alt=''
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter='transition ease-out duration-100'
											enterFrom='transform opacity-0 scale-95'
											enterTo='transform opacity-100 scale-100'
											leave='transition ease-in duration-75'
											leaveFrom='transform opacity-100 scale-100'
											leaveTo='transform opacity-0 scale-95'>
											<Menu.Items
												className='text-white absolute right-0 z-10 
											mt-2 w-48 origin-top-right rounded-md bg-lam-midnight border-2
											py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
												<Menu.Item>
													{({ active }) => (
														<a
															href='/myprofile'
															className={classNames(
																active ? 'bg-lam-slate' : '',
																'block px-4 py-2 text-sm text-white no-underline'
															)}>
															My Profile
														</a>
													)}
												</Menu.Item>
												{/* <Menu.Item>
													{({ active }) => (
														<a
															href='#'
															className={classNames(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm text-gray-700 no-underline'
															)}>
															Settings
														</a>
													)}
												</Menu.Item> */}
												{loggedIn ? (
													<Menu.Item>
														{({ active }) => (
															<a
																href='/login'
																onClick={() => {
																	// console.log('logging out');
																	setLoggedIn(false);
																	localStorage.clear();
																}}
																className={classNames(
																	active ? 'bg-lam-slate' : '',
																	'block px-4 py-2 text-sm text-white' +
																		' no-underline'
																)}>
																Log out
															</a>
														)}
													</Menu.Item>
												) : (
													<Menu.Item>
														{({ active }) => (
															<a
																href='/login'
																className={classNames(
																	active ? 'bg-lam-slate' : '',
																	'block px-4 py-2 text-sm text-white' +
																		' no-underline'
																)}>
																Login
															</a>
														)}
													</Menu.Item>
												)}
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>

						<Disclosure.Panel className='sm:hidden'>
							<div className='space-y-1 px-2 pt-2 pb-3'>
								{navigation.map((item) => (
									<NavLink
										key={item.name}
										to={item.href}
										className={({ isActive }) => {
											// console.log(item.href + ' ' + isActive);
											return (
												'no-underline block px-3 py-2 rounded-md text-base font-medium ' +
												(!isActive
													? ' no-underline text-lam-midnight hover:bg-gray-700 hover:text-white'
													: ' bg-gray-900 text-white')
											);
										}}>
										{item.name}
									</NavLink>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<div className='bg-lam-midnight'>
				<div className='max-w-7xl mx-auto min-h-screen p-2'>
					{props.children}
				</div>
				<footer className='bg-gray-800 text-gray-200 p-2 flex justify-center'>
					<Footer />
				</footer>
			</div>
		</div>
	);
}
