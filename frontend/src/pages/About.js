// example taken from https://tailwindui.com/components/preview#component-6bf262ecea63105e5f1fc57ec12057f9

import { useEffect } from 'react';
import Tool from '../components/js/Tool';
import useFetch from '../hooks/UseFetch';
import { apiToolUrl, baseUrl } from '../shared';

export default function About() {
	const features = [
		{ name: 'Origin', description: 'Designed by Good Goods, Inc.' },
		{
			name: 'Material',
			description:
				'Solid walnut base with rare earth magnets and powder coated steel card cover',
		},
		{ name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
		{
			name: 'Finish',
			description: 'Hand sanded and finished with natural oil',
		},
		{ name: 'Includes', description: 'Wood card tray and 3 refill packs' },
		{
			name: 'Considerations',
			description:
				'Made from natural materials. Grain and color vary with each item.',
		},
	];

	return (
		<div className='bg-lam-midnight rounded'>
			<div
				className='mx-auto grid max-w-2xl grid-cols-1 items-center 
			gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl
			lg:grid-cols-2 lg:px-8 lg:py-20'>
				<div>
					<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						PM Tools Portal
					</h2>
					<p className='mt-4 text-lam-sand'>
						Product Management (PM) Tools portal helps you run reports online
						which help in decision making regarding Lam products. You can run
						the tool which is required and the output will be emailed to you. It
						can take some time. The time taken is propotional to the number of
						parts input.
					</p>

					<dl
						className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 
					sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
						{features.map((feature) => (
							<div
								key={feature.name}
								className='border-t border-gray-200 pt-4'>
								<dt className='font-medium text-white'>{feature.name}</dt>
								<dd className='mt-2 text-sm text-lam-sand'>
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
					<img
						src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg'
						alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
						className='rounded-lg bg-lam-sand hover:opacity-75'
					/>
					<img
						src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg'
						alt='Top down view of walnut card tray with embedded magnets and card groove.'
						className='rounded-lg bg-lam-sand hover:opacity-75'
					/>
					<img
						src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg'
						alt='Side of walnut card tray with card groove and recessed card area.'
						className='rounded-lg bg-lam-sand hover:opacity-75'
					/>
					<img
						src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'
						alt='Walnut card tray filled with cards and card angled in dedicated groove.'
						className='rounded-lg bg-lam-sand hover:opacity-75'
					/>
				</div>
			</div>
		</div>
	);
}
