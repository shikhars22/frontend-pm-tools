/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
	{
		name: 'My User Profile',
		description: 'View and edit my details',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
		imageAlt: 'My User Profile',
		href: '#',
	},
	{
		name: 'My tool runs',
		description: 'Upcoming and past tool runs',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
		imageAlt: 'My tool runs',
		href: '#',
	},
	{
		name: 'My Periodic Reports',
		description: 'Manage all your periodic reports',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
		imageAlt: 'My Periodic Reports',
		href: '#',
	},
];

export default function Example() {
	return (
		<div className='bg-lam-midnight'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12'>
					<h2 className='text-2xl font-bold text-white'>My Account</h2>

					<div
						className='mt-6 space-y-12 lg:grid lg:grid-cols-3 
					lg:gap-x-6 lg:space-y-0'>
						{callouts.map((callout) => (
							<div
								key={callout.name}
								className='group relative'>
								<a
									href={callout.href}
									className='no-underline'>
									<div
										className='relative h-80 w-full overflow-hidden 
								rounded-lg bg-white group-hover:opacity-75
								sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
										<img
											src={callout.imageSrc}
											alt={callout.imageAlt}
											className='h-full w-full object-cover object-center'
										/>
									</div>
									<h3 className='mt-6 text-sm text-lam-sand no-underline'>
										<span
											className='absolute inset-0  
										no-underline'
										/>
										{callout.name}
									</h3>
									<p
										className='text-base font-semibold text-lam-sand 
								no-underline'>
										{callout.description}
									</p>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
