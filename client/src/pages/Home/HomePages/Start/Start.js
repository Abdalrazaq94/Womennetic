import React from "react";
import { Link } from "react-router-dom";
import "./Start.css";
function Start() {
	return <div className="start-picture-container">
        <div className="start-picture">
         <div className="start-text-container">
            <div className="start-text">
              <p>Start a career in Tech?</p> 
            </div>
            <div className="start-but">
            <Link className="home-link" to="/create-laptop-requests">
							<button className="home-bt" id="home-left-bt">
								JOIN OUR COMMUNITY
							</button>
						</Link>
            </div>
         </div>
        </div>
    </div>;
}

export default Start;
