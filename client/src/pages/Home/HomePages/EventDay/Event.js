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
						<p className="wem-event-txt">Womennetic</p>
						<p className="Event-main-txt">
							Womennetic is a not for profit, constituted grassroots. We are a
							group of volunteers who believe in responding to social needs, by
							creating channels and opportunities for women to go in to Tech. We
							believe in supporting women from marginalised groups, from socio
							economic backgrounds. Women who are asylum seekers, refugees and
							from other migrant Eventmunities in Scotland.{" "}
						</p>
						<div className="wom-but">
							<Link className="home-link" to="/create-laptop-requests">
								<button className="home-bt" id="home-left-bt">
									READ MORE
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
