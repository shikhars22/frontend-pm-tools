// example taken from https://tailwindcomponents.com/component/faq-component-with-details-summary-open-animation
import { v4 as uuidv4 } from 'uuid';
{
	/* <script>
	...
	extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
    },
    ...
</script> */
}

const questions = [
	{
		question: 'What is a SAAS platform?',
		answer:
			'SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
	},
	{
		question: 'How does billing work?',
		answer:
			'We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.',
	},
	{ question: 'Dimensions', answer: '6.25" x 3.55" x 1.15"' },
	{
		question: 'Finish',
		answer: 'Hand sanded and finished with natural oil',
	},
	{ question: 'Includes', answer: 'Wood card tray and 3 refill packs' },
	{
		question: 'Considerations',
		answer: 'Made from natural materials. Grain and color vary with each item.',
	},
];

export default function FAQs() {
	return (
		<>
			<div className='text-white max-w-screen-xl mx-auto px-5 bg-lam-midnight min-h-sceen'>
				<div className='flex flex-col items-center'>
					<h2 className='text-white font-bold text-5xl mt-5 tracking-tight'>
						FAQs
					</h2>
					<p className='text-lam-sand text-xl mt-3'>
						Frequenty asked questions
					</p>
				</div>
				<div className='grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8'>
					{questions
						? questions.map((question) => {
								return (
									<div
										className='py-5'
										key={uuidv4()}>
										<details className='group'>
											<summary
												className='text-white flex justify-between items-center 
											font-medium cursor-pointer list-none'>
												<span> {question.question}</span>
												<span className='transition group-open:rotate-180'>
													<svg
														fill='none'
														height='24'
														shapeRendering='geometricPrecision'
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='1.5'
														viewBox='0 0 24 24'
														width='24'>
														<path d='M6 9l6 6 6-6'></path>
													</svg>
												</span>
											</summary>
											<summary
												className='text-lam-sand mt-3  
												flex justify-between items-center 
											font-normal cursor-pointer list-none'>
												<span> {question.answer}</span>
											</summary>
										</details>
									</div>
								);
						  })
						: null}
				</div>
			</div>
		</>
	);
}
