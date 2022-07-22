import ViewMonth from "./ViewMonth";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function ViewCalender() {
   const locales = {
			"en-US": require("date-fns/locale/en-US"),
		};
		// const localizer = momentLocalizer(moment);
		const localizer = dateFnsLocalizer({
			format,
			parse,
			startOfWeek,
			getDay,
			locales,
		});
		// const current = new Date();
		// const date = `${current.getFullYear()}/${
		//   current.getMonth() + 1
		// }/${current.getDate()}`;
		// console.log(date);
		// const today = `2022/7/18`;
		//  cách định dạng ngày tháng đúng trong hàm date
		// const events = [
		//   {
		//     title: "Big Meeting",
		//     allDay: false,
		//     start: today,
		//     end_time: new Date(2022, 6, 20),
		//   },
		//   {
		//     title: "Vacation",
		//     start: new Date(2022, 6, 7, 3, 15),
		//     end: new Date(2022, 6, 7, 22, 20),
		//   },
		//   {
		//     title: "Conference",
		//     start: new Date(2022, 6, 20),
		//     end: new Date(2022, 6, 23),
		//   },
		// ];
		const [allEvents, setAllEvents] = useState([]);
		const [newEvent, setNewEvent] = useState({
			title: "",
			start_time: "",
			end_time: "",
		});
		const getData = () => {
			axios
				.get(`http://127.0.0.1:8000/api/lessons`)
				.then((res) => {
					console.log(res.data);
					setAllEvents(res.data);
				})
				.catch((error) => console.log(error));
		};

		function handleAddEvent() {
			console.log(newEvent);
			setAllEvents([...allEvents, newEvent]);
			axios
				.post("http://127.0.0.1:8000/api/lessons", {
					title: newEvent.title,
					start_time: newEvent.start_time,
					end_time: newEvent.end_time,
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
		useEffect(() => {
			getData();
		}, [newEvent]);
		const handleSelectEvent = useCallback(
			(event) => window.alert(event.name),
			[]
		);
	return (
		<div class="dashboard__main">
			<div class="dashboard__content bg-light-4">
				<div class="row pb-50 mb-10">
					<div class="col-auto">
						{/* //////////////////////////test////////// */}
						<div>
							<input
								type="text"
								name="content"
								placeholder="Add Title"
								style={{ width: "20%", marginRight: "10px" }}
								value={newEvent.title}
								onChange={(e) =>
									setNewEvent({ ...newEvent, title: e.target.value })
								}
							/>
							<input
								type="datetime-local"
								placeholder="start day"
								name="start"
								style={{ width: "20%", marginRight: "10px" }}
								value={newEvent.start}
								onChange={(e) =>
									setNewEvent({ ...newEvent, start_time: e.target.value })
								}
							/>
							<input
								type="datetime-local"
								name="end"
								placeholder="End Date "
								style={{ width: "20%", marginRight: "10px" }}
								value={newEvent.end}
								onChange={(e) =>
									setNewEvent({ ...newEvent, end_time: e.target.value })
								}
							/>
							<button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
								Add Event
							</button>
						</div>
						{/* //////////////////////////test////////// */}

						{/* <h1 class="text-30 lh-12 fw-700">Calendar</h1>
						<div class="breadcrumbs mt-10 pt-0 pb-0">
							<div class="breadcrumbs__content">
								<div class="breadcrumbs__item">
									<a href="index.html">Home</a>
								</div>
								<div class="breadcrumbs__item">
									<a href="courses-list-3.html">All courses</a>
								</div>
								<div class="breadcrumbs__item">
									<a href="courses-single-1.html">User Experience Design</a>
								</div>
								<div class="breadcrumbs__item">
									<a href="courses-single-1.html">User Interface</a>
								</div>
							</div>
						</div> */}
					</div>
				</div>

				<div class="row">
					<div class="col-xl-9 col-lg-9">
						<div class="col-12">
							<div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
								<div class="d-flex items-center py-20 px-30 border-bottom-light">
									<h2 class="text-17 lh-1 fw-500">Calendar</h2>
								</div>

								<div class="py-40 px-30">
									<Calendar
										localizer={localizer}
										events={allEvents}
										views={["day", "agenda", "work_week", "month"]}
										selectable={true}
										startAccessor="start_time"
										defaultView="month"
										endAccessor="end_time"
										style={{ height: 500, margin: "50px" }}
										// defaultView={Views.DAY}
										onSelectEvent={handleSelectEvent}
									/>
								</div>

								<div class="row x-gap-20 y-gap-10 justify-center pt-30">
									<div class="col-auto">
										<a href="#" class="button -icon -purple-3 text-light-1">
											Export Calender
											<i class="icon-arrow-top-right text-13 ml-10"></i>
										</a>
									</div>
									<div class="col-auto">
										<a href="#" class="button -icon -purple-3 text-light-1">
											Manage Subscriptions
											<i class="icon-arrow-top-right text-13 ml-10"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				<ViewMonth />
			</div>
		</div>
		</div>
	);
}
export default ViewCalender;
