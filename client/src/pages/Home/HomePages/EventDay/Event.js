import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";
function Event() {
	return (
		<div className="Event-container">
			<div className="Event-card">
				<div className="Event-text-img">
					<div className="Event-img"></div>
				</div>
				<div className="Event-text-card">
					<div className="Event-txt">
						<p className="wem-event-txt">
							Our International Women’s Day Event{" "}
						</p>
						<p className="Event-main-txt">
							Join us at our IWD2023 event #DigitALL: Come Along and Get
							Inspired on 11th March 2023.
						</p>
						<div className="wom-but">
							<Link
								target='_blank'
								className="home-link"
								to="https://www.eventbrite.com/e/scotland-international-womens-day-2023-digitall-get-inspired-and-step-in-tickets-545289354137"
							>
								<button className="home-bt" id="home-left-bt">
									CLICK TO REGISTER
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Event;
