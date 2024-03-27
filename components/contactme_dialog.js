'use strict';
const element = React.createElement;

/* TODO: Make a Contact Me BUTTON component and add to header component */

/* Contact me Dialog component */
class ContactMeDialog extends React.Component
{
	// Default constructor

	// Override render method
	render()
	{
		const dialog = (
			<React.Fragment>
				<h1>Contact Me</h1>

			    <p>
			      Have a question or concern? Need my help with something? Just want to chat?<br/>
			      I'm open to all communications! Just drop your email address below and tell me what's up.<br/>
			      I'll send a response to your email as soon as possible.
			    </p>

			    <form id="contact-me-form">

			      <input type="text" name="email" maxLength="320" placeholder="Enter your email"/>

			      <textarea type="textarea" name="comment" maxLength="500" rows="5" cols="40" placeholder="Ask me anything"></textarea>

			      <input type="submit" name="submit" value="Send"/>

			    </form>

			    <a  href="#" className="dialog-close">X</a>
			 </React.Fragment>
  		);

		return dialog;
	}
}

// Replace DOM 'dialog element' with React Dialog component
const domContainer = document.querySelector("#contact-me-dialog");

ReactDOM.render(element(ContactMeDialog), domContainer);
