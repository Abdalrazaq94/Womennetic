import React from "react";
import "./Vision.css";
function Vision() {
	return (
		<div className="Vision-container">
			<div className="Vision-card">
				<div className="Vision-text-img">
					<div className="Vision-img"></div>
				</div>
				<div className="Vision-text-card">
					<div className="Vision-txt">
						<p className="wem-Vision-txt">Our Vision</p>
						<p className="Vision-main-txt">
							A Tech world that Values and Empowers women from all backgrounds.
						</p>
						<p className="wem-Vision-txt">Our Mission</p>
					
							<ul className="list-vision">
								<li>
								We aim to create a person-centered, accessible, and nurturing
									community.{" "}
								</li>
								<li>
									We will exceed our member’s expectations by respecting who
									they are and what is important to them. Our member’s
									satisfaction is the key to our success.
								</li>
								<li>
									We will deliver person-focused and tailored support. Our sole
									purpose is responding to people’s needs.
								</li>
								<li>
									We will provide a safe space for our community. Our priority
									is to have an open, transparent, safe, and respectful culture.{" "}
								</li>
								<li>
									The success of our vision is also dependent on our community.
									Our dedication involves creating opportunities, supporting
									relationship building, and providing accessible resources.{" "}
								</li>
							</ul>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Vision;
