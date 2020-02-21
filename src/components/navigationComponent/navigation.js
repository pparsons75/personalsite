import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import CollapsibleNav from "react-bootstrap/Collapse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-scroll";
// import "bootstrap/js/src/collapse.js";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		
		this.closeMenu = this.closeMenu.bind(this);
		

		this.state = {
			isOpen: false
		};
	}

	closeMenu() {
		this.setState({ isOpen: false });
	}

	// 	$(".nav-link").click(function ()
	//     $(".nav-button,.primary-nav").toggleClass("close");
	// });
	render() {
		return (
			<Router>
				<Navbar
					className="border-bottom"
					bg="light"
					expand="lg"
					fixed="top"
					style={{ position: "sticky", top: 0 }}
					// may want to make this a class sticky-nav
				>
					<NavbarBrand>Phil Parsons</NavbarBrand>
					<Navbar.Toggle
						className="border-0"
						aria-controls="basic-navbar-nav"
						// onClick={this.toggle}
					/>
					{/* <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" /> */}
					<Navbar.Collapse id="basic-navbar-nav">
						{/* <Navbar.Collapse id="navbar-toggle"> */}
						<Nav className="ml-auto">
							<Link
								className="nav-link"
								activeClass="active"
								to="main"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								//onClick={this.toggleMenu}
								onClick={this.closeMenu}
								
							>
								About
							</Link>
							<Link
								className="nav-link"
								activeClass="active"
								to="skills"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onClick={closeMenu}
							>
								Skills
							</Link>
							<Link
								className="nav-link"
								activeClass="active"
								to="experience"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onClick={closeMenu}
							>
								Experience
							</Link>
							<Link
								className="nav-link"
								activeClass="active"
								to="portfolio"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onClick={closeMenu}
							>
								Portfolio
							</Link>
							<Link
								className="nav-link"
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onClick={closeMenu}
							>
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Router>
		);
	}
}
export default Navigation;

{
	/* <Navbar bg="light" expand="lg">
	<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
	<Navbar.Toggle aria-controls="basic-navbar-nav" />
	<Navbar.Collapse id="basic-navbar-nav">
		<Nav className="mr-auto">
			<Nav.Link href="#home">Home</Nav.Link>
			<Nav.Link href="#link">Link</Nav.Link>
			<NavDropdown title="Dropdown" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
			</NavDropdown>
		</Nav>
		<Form inline>
			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			<Button variant="outline-success">Search</Button>
		</Form>
	</Navbar.Collapse>
</Navbar>; */
}

// $('#menu li').on('click', function(){
// 	$("#menu").hide();
// 	$("#menu-icon").removeClass("show");
// });
