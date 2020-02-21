import React from "react";
import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import NavbarBrand from "react-bootstrap/NavbarBrand";
// import Nav from "react-bootstrap/Nav";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/navigationComponent/navigation";
import Main from "./components/sections/main";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/experience";
import Portfolio from "./components/sections/portfolio";
import Contact from "./components/sections/contact";
import Footer from "./components/footerComponent/footer";
import "./App.css";

class App extends React.Component {
	// this.state={scrolled:false};

	// componentDidMount(){
	//   window.addEventListener('scroll', () => )
	// }
	render() {
		return (
			//<Router>
			<Container className="p-0" fluid={true}>
				{/* <Navbar className="border-bottom" bg="transparent" expand="lg">
					<NavbarBrand>Phil Parsons</NavbarBrand>
					<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
					<Navbar.Collapse id="navbar-toggle">
						<Nav className="ml-auto">
							<Link className="nav-link" to="/">
								Home
							</Link>
							<Link className="nav-link" to="/about">
								About
							</Link>
							<Link className="nav-link" to="/contact">
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
        </Navbar> */}
				<Navigation />
				<Main />
				<Skills />
				<Experience />
				<Portfolio />
				<Contact />
				<Footer />
			</Container>
			//</Router>
		);
	}
}

export default App;
