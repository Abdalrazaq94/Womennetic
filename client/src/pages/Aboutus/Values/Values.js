import React from "react";
import "./Values.css";

function Values() {
	return (
		<div className="values-container">
			<div className="values-card">
				<div className="values-text-card">
					<div className="values-txt">
						<p className="vl-txt">Our Core Values</p>
						<p className="values-main-txt">
							Using a Person centred approach, we embrace Respect, Compassion
							and Courage. We thrive on building safe connections.
						</p>
						<p className="vl-txt2">What do we do?</p>
						<p className="values-main-txt">
							We offer peer to peer support, expert support, workshops, events
							and free resources. Our community network is growing and we
							encourage you to Join Us.
						</p>
					</div>
				</div>

				<div className="values-text-img">
					<div className="value-img"></div>
				</div>
			</div>

		</div>
	);
}

export default Values;
