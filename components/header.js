'use strict';
const element = React.createElement;

/* Header component */
class Header extends React.Component
{
	// Default constructor

	// Triggered when the contact button is clicked
	handleContactButton()
	{
		document.querySelector("#contact-dialog").style.display = "block";
		document.querySelector("#overlay").style.display = "block";
	}

	// Override render method
	render()
	{
		// Note: Contact Me button hidden until functional
		// <button type="button">Contact Me</button>
		return (
			<React.Fragment>

				<a className="text-logo" href="index.html">Omar Johnson</a>

			    <nav>
			      <div><p><a className="nav" href="/index.html">Home</a></p></div>
			      <div><p><a className="nav" href="/about/">About</a></p></div>
			      <div><p><a className="nav" href="/projects/">Projects</a></p></div>
			      <div><p><a className="nav" href="/certifications/">Certifications</a></p></div>
			    </nav>

				<a href="#" onClick={this.handleContactButton}>Contact Me</a>
	    </React.Fragment>
		);
	}
}

// Replace DOM 'header' with React Header component
const domContainer = document.querySelector("#react-header");

ReactDOM.render(element(Header), domContainer);
