import React from "react";
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../node_modules/fontawesome/css/font-awesome.min.css";
// import "font-awesome";
//import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faTumblr, faTwitter } from "react-fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import faCoffee from "@fortawesome/fontawesome-free-solid/faCoffee";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaBlackTie } from "react-icons/fa";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fields: {},
			errors: {}
		};
	}
	//on every change, update the state for the changed field
	handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	}
	//validate fields for empty and other conditions
	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		//name
		if (!fields["name"]) {
			formIsValid = false;
			errors["name"] = "name is required";
		}
	}
	contactSubmit(e) {
		e.preventDefault();

		// if (this.handleValidation()) {
		// 	alert("form submitted");
		// } else {
		// 	alert("form has errors");
		// }
	}
	// onChange = event => {
	// 	this.handleUserInput(event);
	// };

	// handleUserInput(event) {
	// 	const name = event.target.name;
	// 	const value = event.target.value;
	// 	this.setState({ [name]: value }, () => {
	// 		this.validateField(name, value);
	// 	});
	// }

	// validateField(fieldname, value) {
	// 	let fieldValidationErrors = this.state.formErrors;
	// 	let nameValid = this.state.nameValid;
	// 	let emailValid = this.state.emailValid;

	// 	switch (fieldname) {
	// 		case "name":
	// 			if (nameValid == "" || nameValid == null) {
	// 			}
	// 			break;
	// 		case "email":
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }
	// validate = () => {
	// 	let nameError = "* Required ";
	// 	let emailError = "";

	// 	if (!this.state.email.includes("@")) {
	// 		emailError = "invalid email";
	// 		return false;
	// 	}

	// 	if (emailError) {
	// 		this.setState({ emailError });
	// 	}
	// 	return true;
	// };

	// handleChange = event => {
	// 	this.setState({ [event.target.name]: event.target.value });
	// };
	// handleSubmit = event => {
	// 	event.preventDefault();
	// 	const isValid = this.validate();
	// 	if (isValid) {
	// 		console.log(this.state);
	// 	}
	// };
	render() {
		return (
			<form onSubmit={this.contactSubmit.bind(this)} noValidate>
				<div
					className="contact-section"
					id="contact"
					style={{ padding: "55px .75rem" }}
				>
					{/* <h1>Contact</h1> */}
					{/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
					<div
						className="wrap wrap mcb-wrap one clearfix"
						style={{ backgroundColor: "#6f8c84" }}
					>
						<div
							className="column mcb-column one-third column_column"
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
										{/* <i className="icon-linkedin"></i> */}
										<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
									</span>
									<span className="b">
										{/* <i className="icon-linkedin"></i> */}
										<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
										{/* <FontAwesomeIcon /> */}
										{/* <i className={faTumblr} /> */}
									</span>
								</a>
							</div>
						</div>
						<div
							className="column mcb-column two-third column_column"
							style={{ height: "auto" }}
						>
							<div className="column one-second">
								<span className="wpcf7-form-control-wrap your-name">
									<input
										type="text"
										name="name"
										className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
										value={this.state.fields["name"]}
										onChange={this.handleChange.bind(this, "name")}
										size="40"
										placeholder="Name"
									></input>
									<span
										role="alert"
										className="wpcf7-not-valid-tip"
										style={{
											fontSize: "16px",
											fontWeight: "bold"
										}}
									>
										{this.state.errors["name"]}&nbsp;&nbsp;
										{/* <FontAwesomeIcon
											icon={faTimes}
											style={{
												fontSize: "20px",
												marginTop: "10px",
												marginRight: "15px"
											}}
										></FontAwesomeIcon> */}
									</span>
								</span>
							</div>
							<div className="column one-second">
								<span className="wpcf7-form-control-wrap your-email">
									<input
										type="email"
										name="email"
										className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
										value={this.state.fields["email"]}
										onChange={this.handleChange.bind(this, "email")}
										size="40"
										placeholder="Email"
									></input>
									<span role="alert" className="wpcf7-not-valid-tip">
										<FontAwesomeIcon
											icon={faTimes}
											style={{
												fontSize: "20px",
												marginTop: "10px",
												marginRight: "15px"
											}}
										></FontAwesomeIcon>
									</span>
									{this.state.emailError}&nbsp;&nbsp;
								</span>
							</div>
							<div className="column one">
								<span className="wpcf7-form-control-wrap your-subject">
									<input
										type="text"
										name="subject"
										className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
										value={this.state.fields["subject"]}
										// onChange={this.handleChange.bind(this, "subject")}
										size="40"
										placeholder="Subject"
									></input>
								</span>
							</div>
							<div className="column one">
								<span className="wpcf7-form-control-wrap your-message">
									<textarea
										type="text"
										rows="5"
										name="message"
										className="wpcf7-form-control wpcf7-textarea"
										value={this.state.fields["message"]}
										// onChange={this.handleChange.bind(this, "message")}
										cols="40"
										placeholder="Message"
									></textarea>
								</span>
							</div>
							<div className="column ">
								<input
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
								></input>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
export default Contact;
