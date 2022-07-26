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
		// console.log(newEvent);
		
		// axios
		// 	.post("http://127.0.0.1:8000/api/lessons", {
		// 		title: newEvent.title,
		// 		start_time: newEvent.start_time,
		// 		end_time: newEvent.end_time,
		// 	})
		// 	.then(function (response) {
		// 		console.log(response);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
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

								<div className="row y-gap-20 justify-between pt-15">
									<div className="col-auto">
										<button className="button -md -outline-purple-1 text-purple-1">
											Review
										</button>
									</div>

									<div className="col-auto">
										<button className="button -md -purple-1 text-white" type="submit">
											Create
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateCalender;
