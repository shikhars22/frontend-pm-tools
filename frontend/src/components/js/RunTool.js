import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RunTool(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [file, setFile] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		console.log(
			'This file is uploaded for : ',
			props.name,
			'tool. The file details are: ',
			file
		);
	}, [file]);
	const handleFileChange = (e) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};
	const handleUploadClick = (e) => {
		e.preventDefault();
		handleClose();
		if (!file) {
			return;
		}

		// 👇 Uploading the file using the fetch API to the server
		fetch('https://httpbin.org/post', {
			method: 'POST',
			body: file,
			// 👇 Set headers manually for single file upload
			headers: {
				'content-type': file.type,
				'content-length': `${file.size}`, // 👈 Headers need to be a string
			},
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Something went wrong');
				}
				// navigate('/404');
				return res.json();
			})
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	};
	return (
		<>
			<div className='flex justify-center'>
				<button
					className='px-4 py-1 text-sm text-emerald-600 bg-white
        font-semibold rounded-full border border-emerald-200
         hover:border-transparent hover:text-lam-mint
        focus:outline-none focus:ring-2 focus:ring-lam-mint focus:ring-offset-2'
					onClick={handleShow}>
					Run
				</button>
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header
					closeButton
					className='bg-lam-midnight text-white'>
					<Modal.Title>Run {props.name} Tool</Modal.Title>
				</Modal.Header>
				<Modal.Body className='flex justify-center'>
					<form
						// onSubmit={(e) => {
						// 	handleClose();
						// 	e.preventDefault();
						// props.updateEmployee(props.id, name, role);
						// }}
						id='runToolModal'
						className='w-full max-w-sm'>
						<div className='flex justify-center md:flex md:items-center'>
							{/* <div className='md:w-1/3'></div> */}
							<div>
								<button
									className='m-6 shadow bg-emerald-400 hover:bg-lam-mint
                                    focus:shadow-outline focus:outline-none text-white 
                                    font-bold py-2 px-4 rounded'
									type='button'>
									Step 1 - Download Template
								</button>
							</div>
						</div>
						<div className='flex'>
							<div className='md:flex md:items-center flex items-center justify-center w-full'>
								<label
									htmlFor='dropzone-file'
									className='flex flex-col items-center justify-end w-full 
                                     border-2 border-gray-300 border-dashed rounded-lg
                                    cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700
                                    hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500
                                    dark:hover:bg-gray-600'>
									<div
										className='md:flex md:items-center flex flex-col items-center 
									justify-center pt-5 pb-6'>
										<svg
											aria-hidden='true'
											className='w-10 h-10 mb-3 text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											// xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
										</svg>
										<p className='mb-2 text-sm dark:text-gray-400'>
											<span className='font-semibold text-lam-midnight'>
												Step 2 - Click to upload
											</span>{' '}
											or drag and drop
										</p>
										<p className='text-xs text-gray-500 dark:text-gray-400'>
											Use the excel file provided as template for input
										</p>
									</div>
									<input
										id='dropzone-file'
										type='file'
										className='hidden'
										onChange={handleFileChange}
									/>
									<div className='flex text-lam-mint justify-center my-6'>
										{file && `${file.name}` + ' is uploaded'}
									</div>
								</label>
							</div>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<div className='md:flex md:items-center'>
						<button
							className='m-2 shadow bg-lam-slate hover:bg-lam-midnight
                                    focus:shadow-outline focus:outline-none text-white 
                                    font-bold py-2 px-4 rounded'
							onClick={handleClose}>
							Close
						</button>
						<button
							onClick={handleUploadClick}
							form='runToolModal'
							className='m-2 shadow bg-emerald-400 hover:bg-lam-mint
                                    focus:shadow-outline focus:outline-none text-white 
                                    font-bold py-2 px-4 rounded'>
							Step 3 - Run Tool
						</button>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
}
