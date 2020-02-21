import React from "react";
import $ from "jquery";
import { Waypoint } from "react-waypoint";
import { Container, Row, Col } from "react-bootstrap";
//import Skillbar from "../skillsComponent/skillbar";

class Skills extends React.Component {
	componentDidMount() {
		// 	// Jquery here $(...)...
		// $(".progress").waypoint(
		// 	function() {
		// 		$(".progress").css({
		// 			animation: "animate-positive 2s",
		// 			opacity: "1"
		// 		});
		// 	},
		// 	{ offset: "75%" }
		// );
	}

	render() {
		return (
			<div
				className="skills-section"
				id="skills"
				style={{
					padding: "55px" //23.75%
				}}
			>
				<Container>
					<Row>
						<Col>
							<h1 className="section_title">Skills</h1>
							<br />
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="progress_bars">
								<ul className="bars_list hover" style={{paddingLeft: "0"}}>
									<li>
										<h6>
											HTML
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span className="progress" id="html" width="100%"></span>
										</div>
									</li>
									<li>
										<h6>
											CSS
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span className="progress" id="css" width="100%"></span>
										</div>
									</li>
									<li>
										<h6>
											JavaScript
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span
												className="progress"
												id="javascript"
												width="100%"
											></span>
										</div>
									</li>
									<li>
										<h6>
											Reactjs
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span
												className="progress"
												id="reactjs"
												width="100%"
											></span>
										</div>
									</li>
									<li>
										<h6>
											C#
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span
												className="progress"
												id="reactjs"
												width="100%"
											></span>
										</div>
									</li>
								</ul>
							</div>
						</Col>
						<Col>
							<div className="progress_bars">
								<ul className="bars_list hover" style={{paddingLeft: "0"}}>
									<li>
										<h6>
											ASP.NET
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span
												className="progress"
												id="reactjs"
												width="100%"
											></span>
										</div>
									</li>
									<li>
										<h6>
											SQL
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span
												className="progress"
												id="reactjs"
												width="100%"
											></span>
										</div>
									</li>
									<li>
										<h6>
											Web Development/Misc
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span
												className="progress"
												id="reactjs"
												width="100%"
											></span>
										</div>
									</li>
									<li>
										<h6>
											Agile
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span
												className="progress"
												id="reactjs"
												width="100%"
											></span>
										</div>
									</li>
									<li>
										<h6>
											Graphic Design
											<span className="label">
												100<em>%</em>
											</span>
										</h6>
										<div className="bar">
											<span
												className="progress"
												id="reactjs"
												width="100%"
											></span>
										</div>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>

				{/* <h1 className="section_title">Skills</h1>
				<br />
				<div style={{ width: 400, float: "left" }}>
					<div className="progress_bars">
						<ul className="bars_list hover">
							<li>
								<h6>
									HTML
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="html" width="100%"></span>
								</div>
							</li>
							<li>
								<h6>
									CSS
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="css" width="100%"></span>
								</div>
							</li>
							<li>
								<h6>
									JavaScript
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span
										className="progress"
										id="javascript"
										width="100%"
									></span>
								</div>
							</li>
							<li>
								<h6>
									Reactjs
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="reactjs" width="100%"></span>
								</div>
							</li>
							<li>
								<h6>
									C#
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="reactjs" width="100%"></span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div style={{ width: 400, float: "left" }}>
					<div className="progress_bars">
						<ul className="bars_list hover">
							<li>
								<h6>
									ASP.NET
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="reactjs" width="100%"></span>
								</div>
							</li>
							<li>
								<h6>
									SQL
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="reactjs" width="100%"></span>
								</div>
							</li>
							<li>
								<h6>
									Web Development/Misc
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="reactjs" width="100%"></span>
								</div>
							</li>
							<li>
								<h6>
									Agile
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="reactjs" width="100%"></span>
								</div>
							</li>
							<li>
								<h6>
									Graphic Design
									<span className="label">
										100<em>%</em>
									</span>
								</h6>
								<div className="bar">
									<span className="progress" id="reactjs" width="100%"></span>
								</div>
							</li>
						</ul>
					</div>
				</div>*/}
			</div>
		);
	}
}
export default Skills;
