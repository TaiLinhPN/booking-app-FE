 
import React, { useState, useCallback, useEffect, useMemo } from "react";
import axios from "axios";



function Teacher() {


  	const [listTeacher, setlistTeacher] = useState([]);

		const getData = () => {
			axios
				.get(`http://127.0.0.1:8000/api/teachers`)
				.then((res) => {
					setlistTeacher(res.data);
					console.log(res.data);
				})
				.catch((error) => console.log(error));
		};

		useEffect(() => {
			getData();
		}, []);
  return (
		<>
			<section className="section-bg layout-pt-lg layout-pb-md">
				<div className="section-bg__item -full -height-half bg-dark-5" />
				<div data-anim-wrap="" className="container animated">
					<div className="row justify-center text-center">
						<div className="col-auto">
							<div className="sectionTitle ">
								<h2 className="sectionTitle__title text-white">Ours teacher</h2>
								<p className="sectionTitle__text text-white">
									Lorem ipsum dolor sit amet, consectetur.
								</p>
							</div>
						</div>
					</div>
					<div
						data-anim-wrap=""
						className="row y-gap-30 justify-between pt-60 lg:pt-50 animated"
					>
						{listTeacher.map((teacher, index) => (
							<div
								key={index}
								data-anim-child={`slide-up delay-${index + 1}`}
								className="col-lg-3 col-md-6 is-in-view"
							>
								<div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2">
									<div className="coursesCard__image">
										<img src="img/home-9/hero/4.png" alt="image" />
									</div>
									<div className="coursesCard__content mt-30">
										<h5 className="coursesCard__title text-18 lh-1 fw-500">
											{teacher.name}
										</h5>
										<p className="coursesCard__text text-14 mt-10">
											{teacher.address}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
export default Teacher;
