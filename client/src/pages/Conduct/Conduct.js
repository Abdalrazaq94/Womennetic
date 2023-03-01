import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import "./Conduct.css";

const CodeOfConduct = () => {
	return (
		<>
			<Navbar />
			<div className="code-of-conduct">
				<h2>Code of Conduct</h2>
				<p>
					Womennetic is dedicated to providing a Safe Space for its community
					members.
				</p>
				<h3>What is a Safe Space?</h3>
				<p>
					A Safe Space in Womennetic is a place that allows people to feel
					confident, safe, open and valued. A space that is harassment-free for
					everyone regardless of age, gender, sexual orientation, disability,
					physical appearance, race, or religion (or lack thereof). A Safe Space
					is crucial for the wellness of our community members and it is our
					duty of care to ensure that we create and maintain a safe environment.
				</p>
				<p>
					All members of the community (including, guests, participants,
					organisers, mentors, mentees and volunteers) at Womennetic are
					required to agree to the following code of conduct. The code of
					conduct applies to all Womennetic activities including talks, panels,
					workshops, programmes and social events. It extends to social media
					handles and activities, for example on Instagram, Twitter and
					Linkedin.
				</p>
				<p>
					Womennetic organisers will enforce this code throughout and expect
					cooperation in ensuring a safe environment for all.
				</p>
				<h3>Expected Behaviour</h3>
				<ul>
					<li>
						Be considerate in language and actions, and respect the boundaries
						of fellow participants, guests and members.
					</li>
					<li>
						Refrain from demeaning, discriminatory, or harassing behaviour and
						language. More details can be found under Unacceptable Behaviour.
					</li>
					<li>
						Alert a Womennetic Organiser of the code of conduct if you notice
						someone in distress, or observe violations of this code of conduct,
						even if they seem inconsequential. More details can be found on What
						To Do If You Witness or Are Subject To Unacceptable Behaviour.
					</li>
				</ul>
				<h3>Unacceptable Behaviourr</h3>
				<p>Behaviour that is unacceptable includes, but is not limited to:</p>
				<ul>
					<li>Stalking</li>
					<li>Deliberate intimidation</li>
					<li>Unwanted photography or recording</li>
					<li>Sustained or willful disruption of talks or other events</li>
					<li>Use of sexual or discriminatory imagery, comments, or jokes</li>
					<li>
						Offensive comments related to age, gender, sexual orientation,
						disability, race or religion
					</li>
					<li>
						Inappropriate physical contact, which can include grabbing, or
						massaging or hugging without consent.
					</li>
					<li>
						Unwelcome sexual attention, which can include inappropriate
						questions of a sexual nature, asking for sexual favours or
						repeatedly asking for dates or contact information.
					</li>
				</ul>
				<p>
					If you are asked to stop harassing behaviour you should stop
					immediately, even if your behaviour was meant to be friendly or a
					joke, it was clearly not taken that way and for the comfort of all
					conference attendees you should stop. Participants, attendees, guests,
					volunteers and members who behave in a manner deemed inappropriate are
					subject to actions listed under{" "}
					<span> Procedure for Code of Conduct Violations.</span>
				</p>

				<h3>Community Events and Activities</h3>
				<p>
					Resources such as Presentation Slides and Posters should not contain
					offensive or sexualised material. If this material is impossible to
					avoid given the topic (for example text mining of material from hate
					sites) the existence of this material should be noted in the abstract
					and, in the case of oral contributions, at the start of the talk or
					session. Sponsors should not use sexualized images, activities, or
					other material. Volunteers and staff should not use sexualised
					clothing/uniforms/costumes or otherwise create a sexualised
					environment. In case of violations, sanctions may be applied without
					the return of sponsorship contribution
				</p>
				<h3>Procedure for Code of Conduct Violations</h3>
				<p>
					The organizing committee reserves the right to determine the
					appropriate response for all code of conduct violations. Potential
					responses include:
				</p>
				<ul>
					<li>a formal warning to stop harassing behaviour</li>
					<li>expulsion from the Community </li>
					<li>cancellation or early termination of talks or other events</li>
				</ul>
				<h3>
					What To Do If You Witness or Are Subject To Unacceptable Behaviour
				</h3>
				<p>
					Please notify Tandy Nicole at{" "}
					<a className="footer-link">tandy.nicole@womennetic.org</a>
				</p>
			</div>
			<Footer />
		</>
	);
};

export default CodeOfConduct;
