'use strict';
const element = React.createElement;


/* Footer component */
class Footer extends React.Component
{
	// Default constructor

	// Override render method
	render()
	{
		const year = new Date().getFullYear();

		return (
			<React.Fragment>
				<div>
			      <a href="https://www.linkedin.com/in/omarjohnson2004" target="_blank" title="Opens in a new tab"><img src="/socials/linkedin_icon.png" alt="LinkedIn"/></a>
			    </div>

			    <p className="footer">&copy; { year } Omar Johnson</p>

			    <p><a className="footer" href="#" onClick={ (e) => { e.preventDefault(); window.scrollTo(0, 0); } } alt="Click to return to the top">Return to top</a></p>
	    	</React.Fragment>
		);
	}
}

// Replace DOM 'footer' with React Header component
const domContainer = document.querySelector("#react-footer");

ReactDOM.render(element(Footer), domContainer);
