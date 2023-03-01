import React from "react";
import { Link } from "react-router-dom";
import "./JoinOurCommunity.css";
function JoinOurCommunity() {
	return (
		<div className="Join-community-container">
			<div className="join-community-card">
				<div className="com-text-card">
					<div className="com-txt">
						<p className="wem-txt">Womennetic</p>
						<p className="com-main-txt">
							Womennetic is a not for profit, constituted grassroots. We are a
							group of volunteers who believe in responding to social needs, by
							creating channels and opportunities for women to go in to Tech. We
							believe in supporting women from marginalised groups, from socio
							economic backgrounds. Women who are asylum seekers, refugees and
							from other migrant communities in Scotland.{" "}
						</p>
						<div className="wom-but">
							<Link className="home-link" to="/About">
								<button className="home-bt" id="home-left-bt">
									READ MORE
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="com-text-img">
					<div className="com-img"></div>
				</div>
			</div>
		</div>
	);
}

export default JoinOurCommunity;
