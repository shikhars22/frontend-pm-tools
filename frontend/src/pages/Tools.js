import { useEffect } from 'react';
import Tool from '../components/js/Tool';
import useFetch from '../hooks/UseFetch';
import { apiToolUrl, baseUrl } from '../shared';

export default function Tools() {
	// const [tools, setTools] = useState();

	const url = baseUrl + apiToolUrl;
	const method = 'GET';
	const headers = {
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + localStorage.getItem('access'),
	};
	// const body = '';

	const {
		request,
		appendData,
		data: { tools } = {},
		errorStatus,
	} = useFetch(url, {
		method: method,
		headers: headers,
	});

	useEffect(() => {
		request();
	}, []);

	return (
		<>
			<div className='bg-lam-midnight min-h-screen'>
				<div className='m-8 flex flex-wrap justify-center'>
					{tools
						? tools.map((tool) => {
								// console.log(tool);
								return (
									<div key={tool.id.toString()}>
										{tool.isActive ? (
											<Tool
												// id={tool.id}
												desc={tool.desc}
												img={tool.img}
												name={tool.name}
											/>
										) : null}
									</div>
								);
						  })
						: null}
				</div>
			</div>
		</>
	);
}
