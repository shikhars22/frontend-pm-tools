import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tool from '../components/Tool';

export default function Tools() {
	const [tools, setTools] = useState([
		{
			id: 1,
			name: 'BOM Explosion',
			desc: 'Explode multiple BOMs',
			img: 'https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 2,
			name: 'Bulk Where Used',
			desc: 'WU Info upto 12 levels',
			img: 'https://images.pexels.com/photos/8327808/pexels-photo-8327808.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 3,
			name: 'Unique Analysis',
			desc: 'Provides 70% accuracy',
			img: 'https://images.pexels.com/photos/13089944/pexels-photo-13089944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 4,
			name: 'Part Health',
			desc: 'WU, PR, Criticality',
			img: 'https://lamresearch.wpenginepowered.com/wp-content/uploads/2017/09/SP_Series_Products_1920x600-760x428.jpg',
		},
		{
			id: 5,
			name: 'Part Demand',
			desc: 'Last 5 year non-MFG demand',
			img: 'https://lamresearch.wpenginepowered.com/wp-content/uploads/2018/01/DSiE_Products_1920x600-760x428.jpg',
		},
		{
			id: 6,
			name: 'OB PR Report',
			desc: 'OB PRs and Risk',
			img: 'https://lamresearch.wpenginepowered.com/wp-content/uploads/2017/09/Flex_Products_1920x600-760x428.jpg',
		},
		{
			id: 7,
			name: 'MFG Demand',
			desc: 'Last 5 year demand',
			img: 'https://lamresearch.wpenginepowered.com/wp-content/uploads/2022/02/Selective-Etch-Product-Page-Bnaner-760x428.jpg',
		},
	]);

	return (
		<>
			<div className='bg-lam-slate min-h-screen'>
				<div className='flex flex-wrap'>
					{tools
						? tools.map((tool) => {
								console.log(tool);
								return (
									<Tool
										key={tool.id}
										id={tool.id}
										desc={tool.desc}
										img={tool.img}
										name={tool.name}
									/>
								);
						  })
						: null}
				</div>
			</div>
		</>
	);
}
