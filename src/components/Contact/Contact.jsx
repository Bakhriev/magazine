import React from "react"

import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import PinterestIcon from "@material-ui/icons/Pinterest"

import "./Contact.scss"

function Contact() {
	return (
		<div className="contact">
			<div className="wrapper">
				<span>Be In Touch With Us:</span>
				<div className="mail">
					<input type="text" placeholder="Enter your e-mail..." />
					<button>Join Us</button>
				</div>
				<div className="icons">
					<FacebookIcon />
					<InstagramIcon />
					<TwitterIcon />
					<PinterestIcon />
				</div>
			</div>
		</div>
	)
}

export default Contact
