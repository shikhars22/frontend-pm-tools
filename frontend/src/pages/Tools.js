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
				<div className='flex flex-wrap justify-center'>
					{tools
						? tools.map((tool) => {
								// console.log(tool);
								return (
									<div>
										<Tool
											key={tool.id.toString()}
											// id={tool.id}
											desc={tool.desc}
											img={tool.img}
											name={tool.name}
										/>
									</div>
								);
						  })
						: null}
				</div>
				<div>
					<br />
					<br />
				</div>
			</div>
		</>
	);
}
