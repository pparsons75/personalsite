import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


const black = '#000';
const gray = '#212529';
class Main extends React.Component {
	// state = {};

	constructor(props){
		super(props);
		this.state = {
			color: "black"
		};
		this.changeColor = this.changeColor.bind(this);
	}
	changeColor(){
		const newColor = this.state.color === "black" ? "gray" : "black";
		this.setState({color: newColor});
	}
	render() {
		return (
			<div
				className="main-section"
				id="main"
				style={{
					paddingRight: ".75rem",
					paddingLeft: ".75rem",
					paddingBottom: ".75rem",
					background: this.state.color
				}}
				
			>
				<Row>
					<Col style={{paddingTop: "3%"}}>
					<p class="navbar-brand" style={{fontWeight: "lighter", color: "#FFF"}}>Phil Parsons</p>
					<h1 style={{ color: "white", fontSize: "100px", frontWeight: "Black" }}>Design<br/>Development</h1>
					<button onClick={this.changeColor} >Change Color</button>
					</Col>

					<Col><p style={{fontSize: "0.9rem", fontStyle: "italic"}}>
					<img style={{display: "block", float: "right", width: "100%"}} 
					src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c1d1ed20354353.560424da6c951.jpg" 
					alt="Technology and Society"/><a href="https://www.behance.net/gallery/2701989/Technology-and-Society">
						"Technology and Society"</a><span> by <span>Michael Steele</span></span> is licensed under 
						<a href="https://creativecommons.org/licenses/by-nd/4.0/?ref=ccsearch&atype=html" 
						style={{marginRight: "5px"}}>CC BY-ND 4.0</a>
						<a href="https://creativecommons.org/licenses/by-nd/4.0/?ref=ccsearch&atype=html" 
						target="_blank" rel="noopener noreferrer" 
						style={{display: "inline-block", whiteSpace: "none", marginTop: "2px", marginLeft: "3px", height: "22px !important"}}>
							<img style={{height: "inherit", marginRight: "3px", display: "inline-block"}} 
							src="https://search.creativecommons.org/static/img/cc_icon.svg" />
							<img style={{height: "inherit", marginRight: "3px", display: "inline-block"}} 
							src="https://search.creativecommons.org/static/img/cc-by_icon.svg" />
							<img style={{height: "inherit", marginRight: "3px", display: "inline-block"}} 
							src="https://search.creativecommons.org/static/img/cc-nd_icon.svg" /></a></p>
				</Col>
				</Row>
				{/* <h1 style={{ color: "white" }}>About</h1> */}
				{/* <img src="c1d1ed20354353.560424da6c951.jpg"/> */}
				{/* <p style={{fontSize: "0.9rem", fontStyle: "italic"}}>
					<img style={{display: "block", float: "right", width: "60%"}} 
					src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c1d1ed20354353.560424da6c951.jpg" 
					alt="Technology and Society"/><a href="https://www.behance.net/gallery/2701989/Technology-and-Society">
						"Technology and Society"</a><span> by <span>Michael Steele</span></span> is licensed under 
						<a href="https://creativecommons.org/licenses/by-nd/4.0/?ref=ccsearch&atype=html" 
						style={{marginRight: "5px"}}>CC BY-ND 4.0</a>
						<a href="https://creativecommons.org/licenses/by-nd/4.0/?ref=ccsearch&atype=html" 
						target="_blank" rel="noopener noreferrer" 
						style={{display: "inline-block", whiteSpace: "none", marginTop: "2px", marginLeft: "3px", height: "22px !important"}}>
							<img style={{height: "inherit", marginRight: "3px", display: "inline-block"}} 
							src="https://search.creativecommons.org/static/img/cc_icon.svg" />
							<img style={{height: "inherit", marginRight: "3px", display: "inline-block"}} 
							src="https://search.creativecommons.org/static/img/cc-by_icon.svg" />
							<img style={{height: "inherit", marginRight: "3px", display: "inline-block"}} 
							src="https://search.creativecommons.org/static/img/cc-nd_icon.svg" /></a></p>
				
				 <button onClick={this.changeColor}>Change Color</button> */}
			</div>
		);
	}
}
export default Main;
