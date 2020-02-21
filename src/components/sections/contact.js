import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaBlackTie } from "react-icons/fa";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		fields: {},
	// 		errors: {}
	// 	};
	// }
	// //on every change, update the state for the changed field
	// handleChange(field, e) {
	// 	let fields = this.state.fields;
	// 	fields[field] = e.target.value;
	// 	this.setState({ fields });
	// }
	// //validate fields for empty and other conditions
	// handleValidation() {
	// 	let fields = this.state.fields;
	// 	let errors = {};
	// 	let formIsValid = true;

	// 	//name
	// 	if (!fields["name"]) {
	// 		formIsValid = false;
	// 		errors["name"] = "name is required";
	// 	}
	// }
	// contactSubmit(e) {
	// 	e.preventDefault();

	// }

	render() {
		return (
			<form  noValidate>
				{/* onSubmit={this.contactSubmit.bind(this)} */}











				<div
					className="contact-section"
					id="contact"
					style={{ padding: "55px .75rem" }}
				>
					<div
						className="wrap wrap mcb-wrap one clearfix"
						style={{ backgroundColor: "#6f8c84" }}
					>
						{/* copy here */}
						<Container>
						<Row>
							<Col xs={12} sm={4}>
						<div
							// className="column mcb-column one-third column_column"
							style={{ height: "auto", textAlign: "right" }}
						>
							<h2>Contact Me</h2>
							<p style={{ font: "inherit" }}>
								<big
									style={{
										fontFamily: "Lato, Arial, Tahoma,sans-serif",
										color: "white",
										lineHeight: "25px"
									}}
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
									ut magna sit amet eros ornare posuere ac non felis.
								</big>
							</p>
							<p
								style={{
									fontFamily: "Lato, Arial, Tahoma, sans-serif",
									color: "#D7E4E1"
								}}
							>
								<big>Connect with me</big>
							</p>
							<div style={{ float: "right", backgroundColor: "gray" }}>
								<a
									herf="#"
									className="icon_bar  icon_bar_linkedin icon_bar_small"
								>
									<span className="t">
										<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
									</span>
									<span className="b">
										<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>

									</span>
								</a>
							</div>
						</div>
						</Col>
								{/* end of copy */}


						{/* form components */}
						<Col xs={12} sm={8}>
						<div
							// className="column mcb-column two-third column_column"
							style={{ height: "auto" }}
						>
							{/* <div className="column one-second"> */}
								{/* <span className="wpcf7-form-control-wrap your-name"> */}
									{/* <input
										type="text"
										name="name"
										className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
										// value={this.state.fields["name"]}
										// onChange={this.handleChange.bind(this, "name")}
										size="40"
										placeholder="Name"
									></input> */}
									<Row>
										<Col sm={12} md={6}><Form.Control placeholder="Name" name="name"  style={{marginBottom: "25px"}}>	
									</Form.Control></Col>
									

								{/* </span> */}
							{/* </div> */}
							{/* <div className="column one-second">
								<span className="wpcf7-form-control-wrap your-email"> */}
									{/* <input
										type="email"
										name="email"
										className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
										// value={this.state.fields["email"]}
										// onChange={this.handleChange.bind(this, "email")}
										size="40"
										placeholder="Email"
									></input> */}
									
										<Col sm={12} md={6}><Form.Control placeholder="Email" name="email" xs={12} sm={6} style={{marginBottom: "25px"}}>	
									</Form.Control></Col>
									

						
									</Row>
									{/* {this.state.emailError}&nbsp;&nbsp; */}
								{/* </span>
							</div> */}
							{/* <div className="column one">
								<span className="wpcf7-form-control-wrap your-subject"> */}
								<Row>
									<Col><Form.Control placeholder="Subject" name="subject"  style={{marginBottom: "25px"}}>	
									</Form.Control></Col>
								
									{/* <input
										type="text"
										name="subject"
										className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
										// value={this.state.fields["subject"]}
										// onChange={this.handleChange.bind(this, "subject")}
										size="40"
										placeholder="Subject"
									></input> */}
									</Row>
								{/* </span>
							</div> */}
							{/* <div className="column one">
								<span className="wpcf7-form-control-wrap your-message" style={{marginTop: "10px"}}> */}
								<Row>
									<Col>
										<Form.Control as="textarea" rows="5" placeholder="Message" name="message" style={{marginBottom: "25px"}}>

										</Form.Control>
									</Col>
								</Row>

									{/* <textarea
										type="text"
										rows="5"
										name="message"
										className="wpcf7-form-control wpcf7-textarea"
										// value={this.state.fields["message"]}

										cols="40"
										placeholder="Message"
									></textarea> */}
								{/* </span>
							</div> */}
							{/* <div className="column "> */}
								{/* <input
									type="submit"
									className="wpcf7-form-control wpcf7-submit one"
									value="Submit"
									style={{
										backgroundColor: "black",
										color: "white",
										border: "none",
										width: "137px",
										height: "37px",
										borderRadius: "5px",
										cursor: "pointer",
										fontSize: "12.5px"
									}}
								></input> */}

								<Row>
									<Col><Button variant="dark" type="submit">Submit</Button></Col>
								</Row>

							{/* </div> */}
						</div>
						</Col>
						{/* end components */}
						</Row>
						</Container>

					</div>
				</div>
			</form>
		);
	}
}
export default Contact;
