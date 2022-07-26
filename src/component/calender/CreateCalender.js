import React from "react";
import { useState } from "react";
import "axios";
function CreateCalender() {

    const [bookingInput, setBookingInput] = useState({
			title: "",
			description: "",
			link: "",
			class_size: "",
			image: "",
			end_time: "",
			start_time: "",
			error_list: [],
		});

	const handChangeInput = (e) => {
		const { name, value } = e.target;
		setBookingInput({
			...bookingInput,
			[name]: value,
		});
	};

	function handleAddEvent() {

		
		axios
			.post("http://127.0.0.1:8000/api/lessons", {
				title: bookingInput.title,
				start_time: bookingInput.start_time,
				end_time: bookingInput.end_time,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
		});
	}

	return (
		<div className="dashboard__main">
			<div className="dashboard__content bg-light-4">
				<div className="row pb-50 mb-10">
					<div className="col-auto">
						<h1 className="text-30 lh-12 fw-700">Create New Course</h1>
					</div>
				</div>

				<div className="row y-gap-60">
					<div className="col-12">
						<div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
							<div className="d-flex items-center py-20 px-30 border-bottom-light">
								<h2 className="text-17 lh-1 fw-500">Basic Information</h2>
							</div>

							<div className="py-30 px-30">
								<form
									className="contact-form row y-gap-30"
									onSubmit={handleAddEvent}
								>
									<div className="col-12">
										<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
											Class Title<span>*</span>
										</label>

										<input
											name="title"
											type="text"
											placeholder="Learn Figma - UI/UX Design Essential Training"
											value={bookingInput.title}
											onChange={handChangeInput}
										/>
									</div>

									<div className="col-12">
										<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
											Short Description<span>*</span>
										</label>

										<textarea
											name="description"
											placeholder="Description"
											rows="3"
											value={bookingInput.description}
											onChange={handChangeInput}
										></textarea>
									</div>

									<div className="col-12">
										<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
											Online Link/Offline Address<span>*</span>
										</label>

										<input
											name="link"
											type="text"
											placeholder="Link/Address"
											value={bookingInput.link}
											onChange={handChangeInput}
										/>
									</div>

									<div className="col-md-6">
										<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
											Time Start<span>*</span>
										</label>

										<input
											type="datetime-local"
											placeholder="start day"
											name="datestart"
											value={bookingInput.datestart}
											onChange={handChangeInput}
										/>
									</div>

									<div className="col-md-6">
										<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
											End<span>*</span>
										</label>

										<input
											type="datetime-local"
											placeholder="End day"
											name="dateend"
											value={bookingInput.dateend}
											onChange={handChangeInput}
										/>
									</div>

									<div className="col-md-6">
										<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
											Class size<span>*</span>
										</label>

										<input
											name="class_size"
											type="text"
											placeholder="Select"
											value={bookingInput.class_size}
											onChange={handChangeInput}
										/>
									</div>

									{/* <div className="col-md-6">
										<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
											Class Level
										</label>

										<input
                                        name=""
											type="text"
											placeholder="Select"
											value={bookingInput.class_size}
											onChange={handChangeInput}
										/>
									</div> */}

									<div className="col-md-6">
										<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
											Class Image
										</label>

										<input
											name="image"
											type="text"
											placeholder="Import"
											value={bookingInput.image}
											onChange={handChangeInput}
										/>
									</div>
								</form>

								<div className="col-auto">
									<button
										className="button -md -purple-1 text-white"
										type="submit"
									>
										Create
									</button>
								</div>
							</div>
						</div>
						<div>
							<h1>{bookingInput.title}</h1>
							<h1>{bookingInput.description}</h1>
							<h1>{bookingInput.link}</h1>
							<h1>{bookingInput.datestart}</h1>
							<h1>{bookingInput.dateend}</h1>
							<h1>{bookingInput.class_size}</h1>
							<h1>{bookingInput.image}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateCalender;
