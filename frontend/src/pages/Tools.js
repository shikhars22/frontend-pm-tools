import { useState } from 'react';
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
	]);

	return (
		<>
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
		</>
	);
}
