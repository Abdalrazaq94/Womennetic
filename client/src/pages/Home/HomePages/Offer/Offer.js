import React from "react";
import { Link } from "react-router-dom";
import "./Offer.css";
function Offer() {
	return (
		<div className="offer-container">
			<div className="offer-card">
				<div className="offer-text-card">
					<div className="offer-txt">
                    <div className="offer-wom-but">
							<Link className="home-link" to="/">
								<button className="home-bt" id="home-left-bt">
									JOIN OUR COMMUNITY
								</button>
							</Link>
						</div>
						<p className="offer-main-txt1">
						We offer peer to peer learning, expert support and other support tailored to people's needs 
						</p>
                        <p className="offer-main-txt2">
						We offer peer to peer learning, expert support and other support tailored to people's needs 
						</p>
						
					</div>
				</div>

				<div className="offer-text-img">
					<div className="offer-img"></div>
				</div>
			</div>
		</div>
	);
}

export default Offer;