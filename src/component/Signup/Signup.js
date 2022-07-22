import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const SignUp = () => {
	const [regiserInput, setRegister] = useState({
		name: "",
		email: "",
		address: "",
		option: "teacher",
		password: "",
		confirm_password: "",
		error_list: [],
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setRegister({
			...regiserInput,
			[name]: value,
		});
	};

	const registerSubmit = (e) => {
		e.preventDefault();
		const data = {
			option: regiserInput.option,
			name: regiserInput.name,
			email: regiserInput.email,
			password: regiserInput.password,
			confirm_password: regiserInput.confirm_password,
		};

		axios
			.post(`http://127.0.0.1:8000/api/register`, data)
			.then((res) => {
				console.log(res.data.validation_errors);
				if (res.data.status === 200) {
					console.log("thành công");
				} else {
					console.log("khoong thanh  công");

					setRegister({
						...regiserInput,
						error_list: res.data.validation_errors,
					});
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<div className="content-wrapper  js-content-wrapper">
				<section className="form-page">
					<div className="form-page__img bg-dark-1">
						<div className="form-page-composition">
							<div className="-bg">
								<img
									data-move={30}
									className="js-mouse-move"
									src="img/login/bg.png"
									alt="bg"
								/>
							</div>
							<div className="-el-1">
								<img
									data-move={20}
									className="js-mouse-move"
									src="img/home-9/hero/bg.png"
									alt="image"
								/>
							</div>
							<div className="-el-2">
								<img
									data-move={40}
									className="js-mouse-move"
									src="img/home-9/hero/1.png"
									alt="icon"
								/>
							</div>
							<div className="-el-3">
								<img
									data-move={40}
									className="js-mouse-move"
									src="img/home-9/hero/2.png"
									alt="icon"
								/>
							</div>
							<div className="-el-4">
								<img
									data-move={40}
									className="js-mouse-move"
									src="img/home-9/hero/3.png"
									alt="icon"
								/>
							</div>
						</div>
					</div>
					<div className="form-page__content lg:py-50">
						<div className="container">
							<div className="row justify-center items-center">
								<div className="col-xl-8 col-lg-9">
									<div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
										<h3 className="text-30 lh-13">Sign Up</h3>
										<p className="mt-10">
											Already have an account?{" "}
											<Link
												to={"/Login"}
												className="button -underline text-white"
												href="#"
											>
												Log in
											</Link>
										</p>
										<form
											className="contact-form respondForm__form row y-gap-20 pt-30"
											onSubmit={registerSubmit}
										>
											<div className="col-lg-6">
												<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
													Email address *
												</label>
												<input
													type="text"
													name="email"
													placeholder="Email address"
													value={regiserInput.email}
													onChange={handleInput}
												/>
												<span>
													{regiserInput.error_list !== null &&
														regiserInput.error_list.email}
												</span>
											</div>
											<div className="col-lg-6">
												<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
													Username *
												</label>
												<input
													type="text"
													name="name"
													placeholder="Username"
													value={regiserInput.name}
													onChange={handleInput}
												/>
												<span>
													{regiserInput.error_list !== null &&
														regiserInput.error_list.name}
												</span>
											</div>
											<div className="col-lg-6">
												<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
													Address *
												</label>
												<input
													type="text"
													name="address"
													placeholder="Address"
													value={regiserInput.address}
													onChange={handleInput}
												/>
												<span>
													{regiserInput.error_list !== null &&
														regiserInput.error_list.address}
												</span>
											</div>
											<div className="col-lg-6">
												<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
													Job
												</label>
												<select id="jobs" name="option" onChange={handleInput}>
													<option value="teacher">Teacher</option>
													<option value="student">Student</option>
												</select>
											</div>
											<div className="col-lg-6">
												<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
													Password *
												</label>
												<input
													type="password"
													name="password"
													placeholder="Password"
													value={regiserInput.password}
													onChange={handleInput}
												/>
												<span>
													{regiserInput.error_list !== null &&
														regiserInput.error_list.password}
												</span>
											</div>
											<div className="col-lg-6">
												<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
													Confirm Password *
												</label>
												<input
													type="password"
													name="confirm_password"
													placeholder="Confirm Password"
													value={regiserInput.confirm}
													onChange={handleInput}
												/>
												<span>{}</span>
											</div>
											<div className="col-12">
												<button
													type="submit"
													name="submit"
													id="submit"
													className="button -md -green-1 text-dark-1 fw-500 w-1/1"
												>
													Register
												</button>
											</div>
										</form>
										<div className="lh-12 text-dark-1 fw-500 text-center mt-20">
											Or sign in using
										</div>
										<div className="d-flex x-gap-20 items-center justify-between pt-20">
											<div>
												<button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
													Log In via Facebook
												</button>
											</div>
											<div>
												<button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
													Log In via Google+
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
export default SignUp;
