import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Portfolio extends React.Component {
	state = {};
	render() {
		return (
			<div
				className="portfolio-section"
				id="portfolio"
				// style={{ padding: "1rem 485px" }}
			>
				<h1 style={{ textAlign: "center", paddingTop: "55px" }}>Portfolio</h1>
				<Container style={{paddingTop: "26px"}}>
					<Row>
					<Col></Col>
						<Col>
							{/* <div className="container"> */}
							<img
								src="https://via.placeholder.com/300
C/O https://placeholder.com/ "
								alt="Avatar"
								className="image"
							/>
							<div className="overlay">
								<div className="text">Hello World</div>
							</div>
							{/* </div> */}
						</Col>
						
						<Col>
							{/* <div className="container"> */}
							<img
								src="https://via.placeholder.com/300
C/O https://placeholder.com/ "
								alt="Avatar"
								className="image"
							/>
							<div className="overlay">
								<div className="text">Hello World</div>
							</div>
							{/* </div> */}
						</Col>
						<Col></Col>
					</Row>
				</Container>
				{/* <div className="container">
					<img
						src="https://via.placeholder.com/300
C/O https://placeholder.com/ "
						alt="Avatar"
						className="image"
					/>
					<div className="overlay">
						<div className="text">Hello World</div>
					</div>
				</div> */}
			</div>
		);
	}
}
export default Portfolio;
