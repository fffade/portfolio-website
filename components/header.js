'use strict';
const element = React.createElement;


/* Header component */
class Header extends React.Component
{
	// Default constructor

	// Override render method
	render()
	{
		// Note: Contact Me button hidden until functional
		// <button type="button">Contact Me</button>
		return (
			<React.Fragment>
				<img className="logo" src="/placeholder_logo.png" alt="Logo" onClick={ () => { window.location.href = "index.html"; } }/>

			    <nav> 
			      <div><p><a className="nav" href="/index.html">Home</a></p></div>
			      <div><p><a className="nav" href="/about/">About</a></p></div>
			      <div><p><a className="nav" href="/projects/">Projects</a></p></div>
			    </nav>

	    		
	    	</React.Fragment>
		);
	}
}

// Replace DOM 'header' with React Header component
const domContainer = document.querySelector("#react-header");

ReactDOM.render(element(Header), domContainer);
