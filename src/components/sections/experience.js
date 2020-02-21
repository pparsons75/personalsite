import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Experience extends React.Component {
	state = {};
	render() {
		return (
			<div id="experience" style={{paddingBottom: "75px"}}>
				<div
					style={{
						paddingTop: "55px",
						paddingBottom: "40px",
						backgroundColor: "#f3f3f3"
					}}
				>
					<h2 className="section_title">Experience</h2>
				</div>
				<Container style={{ paddingTop: "60px" }}>
					<Row>
						<Col xs={12} sm={3}>
							<h4 style={{ fontWeight: "lighter", marginBottom: "5px" }}>
								Software Engineer
							</h4>
							<p style={{ fontWeight: "normal", padding: 0 }}>
								Abbott, Kansas City, MO
							</p>
						</Col>
						<Col sm={9}>
							<p style={{ fontWeight: "normal" }}>
								Abbott is a healthcare research and development company that
								produces: medical devices, diagnostics, branded generic
								medicines and nutritional product. EScreen is a subdivision of
								Abbott that specializes in drug testing hardware and software. I
								work as a software developer, using .NET frameworks to support
								our testing hardware and software.
							</p>
							<hr />
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={{ span: 3, offset: 3 }}>
							<h5>Responsibilities:</h5>
							<ul className="list_mixed">
								<li>
									{/* <i className="fas fa-check"></i>  */}
									<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-check"></i> */}
									<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-check"></i> */}
									<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left", marginBottom: "26px" }}>
									{/* <i className="fas fa-check"></i> */}
									<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
							</ul>
						</Col>
						<Col xs={12} sm={{ span: 3, offset: 1 }}>
							<h5>Experience:</h5>
							<ul className="list_mixed">
								<li>
									{/* <i className="fas fa-star"></i> */}
									<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-star"></i> */}
									<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-star"></i> */}
									<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={3}>
							<h4
								style={{
									fontWeight: "lighter",
									marginBottom: "5px"
								}}
							>
								.NET Developer/Anaylst
							</h4>
							<p style={{ fontWeight: "normal", padding: 0 }}>
								Arrow Truck Sales, Kansas City, MO
							</p>
						</Col>
						<Col>
							<p style={{ fontWeight: "normal" }}>
								Volvo is a Swedish multinational manufacturing company. It's
								core activity is the production, distribution and sale of
								trucks, buses and construction equipment. Arrow Truck Sales, a
								Member of the Volvo Group of Companies, is the leading source of
								pre-owned medium and heavy duty trucks in North America. They
								provide high-quality, pre-owned vehicles to customers who want
								to maximize the value of purchasing dollars. I worked as a .NET
								Developer/Analyst using .NET Frameworks to build responsive web
								applications.
							</p>
							<hr />
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={{ span: 3, offset: 3 }}>
							<h5>Responsibilities:</h5>
							<ul className="list_mixed">
								<li>
									{/* <i className="fas fa-check"></i>  */}
									<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-check"></i> */}
									<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-check"></i> */}
									<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-check"></i> */}
									<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
							</ul>
						</Col>
						<Col xs={12} sm={{ span: 3, offset: 1 }}>
							<h5>Experience:</h5>
							<ul className="list_mixed">
								<li>
									{/* <i className="fas fa-star"></i> */}
									<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-star"></i> */}
									<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
								<hr
									style={{
										color: "#f3f3f3",
										width: "50px",
										float: "left",
										clear: "right",
										marginTop: "8px",
										marginBottom: "8px"
									}}
								/>
								<li style={{ clear: "left" }}>
									{/* <i className="fas fa-star"></i> */}
									<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
									&nbsp;&nbsp;knowledge of Photoshop
								</li>
							</ul>
						</Col>
					</Row>
					{/* <div className="container" style={{ paddingTop: "50px" }}>
						<div className="row">
							<div className="col-sm-3" style={{ paddingTop: "10px" }}>
								<h4 style={{ fontWeight: "lighter", marginBottom: "5px" }}>
									Software Engineer
								</h4>
								<p style={{ fontWeight: "normal", padding: 0 }}>
									Abbott, Kansas City, MO
								</p>
							</div>
							<div className="col-sm-9" style={{ height: "100px" }}>
								<p style={{ fontWeight: "normal" }}>
									Abbott is a healthcare research and development company that
									produces: medical devices, diagnostics, branded generic
									medicines and nutritional product. EScreen is a subdivision of
									Abbott that specializes in drug testing hardware and software.
									I work as a software developer, using .NET frameworks to
									support our testing hardware and software.
								</p>
								<div>
									<hr />
								</div>
								<div className="row">
									<div className="col-sm-5">
										<h5>Responsibilities:</h5>
										<ul className="list_mixed">
											<li> */}
					{/* <i className="fas fa-check"></i>  */}
					{/* <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop */}
					{/* </li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-check"></i> */}
					{/* <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-check"></i> */}
					{/* <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-check"></i> */}
					{/* <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
										</ul>
									</div>
									<div className="col-sm-5">
										<h5>Experience:</h5>
										<ul className="list_mixed">
											<li> */}
					{/* <i className="fas fa-star"></i> */}
					{/* <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-star"></i> */}
					{/* <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-star"></i> */}
					{/* <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="row" style={{ marginTop: "250px" }}>
							<div
								className="col-sm-3"
								style={{ height: "100px", paddingTop: "10px" }}
							>
								<h4
									style={{
										fontWeight: "lighter",
										marginBottom: "5px",
										paddingLeft: "0"
									}}
								>
									.NET Developer/Anaylst
								</h4>
								<p style={{ fontWeight: "normal", padding: 0 }}>
									Arrow Truck Sales, Kansas City, MO
								</p>
							</div>
							<div className="col-sm-9"> */}
					{/* style={{ height: "100px" }} */}
					{/* <p style={{ fontWeight: "normal" }}>
									Volvo is a Swedish multinational manufacturing company. It's
									core activity is the production, distribution and sale of
									trucks, buses and construction equipment. Arrow Truck Sales, a
									Member of the Volvo Group of Companies, is the leading source
									of pre-owned medium and heavy duty trucks in North America.
									They provide high-quality, pre-owned vehicles to customers who
									want to maximize the value of purchasing dollars. I worked as
									a .NET Developer/Analyst using .NET Frameworks to build
									responsive web applications.
								</p>
								<div>
									<hr />
								</div>
								<div className="row" style={{ paddingBottom: "75px" }}>
									<div className="col-sm-5">
										<h5>Responsibilities:</h5>
										<ul className="list_mixed">
											<li> */}
					{/* <i className="fas fa-check"></i> */}
					{/* <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-check"></i> */}
					{/* <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-check"></i> */}
					{/* <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}>
												<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> */}
					{/* <i className="fas fa-check"></i> */}
					{/* &nbsp;&nbsp;knowledge of Photoshop
											</li>
										</ul>
									</div>
									<div className="col-sm-5">
										<h5>Experience:</h5>
										<ul className="list_mixed">
											<li> */}
					{/* <i className="fas fa-star"></i> */}
					{/* <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-star"></i> */}
					{/* <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
											<hr
												style={{
													color: "#f3f3f3",
													width: "50px",
													float: "left",
													clear: "right",
													marginTop: "8px",
													marginBottom: "8px"
												}}
											/>
											<li style={{ clear: "left" }}> */}
					{/* <i className="fas fa-star"></i> */}
					{/* <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
												&nbsp;&nbsp;knowledge of Photoshop
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</Container>
			</div>
		);
	}
}
export default Experience;
