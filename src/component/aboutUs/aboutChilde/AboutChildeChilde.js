import React, { useState, useCallback, useEffect, useMemo } from "react";
import axios from "axios";
function AboutChildeChilde() {
	const [listLesson, setListlesson] = useState([]);

	const getData = () => {
		axios
			.get(`http://127.0.0.1:8000/api/lessons`)
			.then((res) => {
				setListlesson(res.data);
			})
			.catch((error) => console.log(error));
	};
  const handleEvent = (lesson) => {
        

    
  }
	useEffect(() => {
		getData();
	}, []);
	return (
		<div data-anim="slide-up delay-4" class="row y-gap-30 pt-30 is-in-view">
			{listLesson.map((lesson, index) => (
				<div class="col-lg-4 col-md-6">
					<div class="eventCard -type-1">
						<div class="eventCard__img">
							<img src={lesson.image_link} alt="image" />
						</div>

						<div class="eventCard__bg bg-white">
							<div class="eventCard__content y-gap-10">
								<div class="eventCard__inner">
									<h4 class="eventCard__title text-17 fw-500">
										{lesson.title}
									</h4>
									<div class="d-flex x-gap-15 pt-10">
										<div class="d-flex items-center">
											<div class="icon-calendar-2 text-16 mr-8"></div>
											<div class="text-14">{lesson.start_time}</div>
										</div>
										<div class="d-flex items-center">
											<div class="icon-location text-16 mr-8"></div>
											<div class="text-14">{lesson.offline_address }</div>
										</div>
									</div>
								</div>

								<div class="eventCard__button">
									<a
										href="#"
										class="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
									>
										Booking now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}

			<div class="row justify-center pt-60 lg:pt-40">
				<div class="col-auto">
					<div class="pagination -buttons">
						<button class="pagination__button -prev">
							<i class="icon icon-chevron-left"></i>
						</button>

						<div class="pagination__count">
							<a href="#">1</a>
							<a class="-count-is-active" href="#">
								2
							</a>
							<a href="#">3</a>
							<span>...</span>
							<a href="#">67</a>
						</div>

						<button class="pagination__button -next">
							<i class="icon icon-chevron-right"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AboutChildeChilde;
