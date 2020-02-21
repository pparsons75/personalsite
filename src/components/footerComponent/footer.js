import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Column";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
	return (
		<footer id="footer" className="clearfix">
			<div className="footer_copy">
				{/* <Container> */}
				<div className="column one">
					<div className="row p-10">
						<div className="copyright col-6">
							©{new Date().getFullYear()} Phil Parsons
						</div>
						<div className="col-6">
							<Link
								className="button button_js"
								to="main"
								spy={true}
								smooth={true}
								offset={-70}
								duration={900}
							>
								<FaChevronUp className="to-top" style={{ float: "right" }} />
							</Link>
						</div>
					</div>
				</div>
				{/* </Container> */}
			</div>
		</footer>
	);
}
export default Footer;
