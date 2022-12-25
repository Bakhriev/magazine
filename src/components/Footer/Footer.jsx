import React from "react"

import "./Footer.scss"

function Footer() {
	return (
		<footer className="footer">
			<div className="top">
				<div className="item">
					<h4>Categories</h4>
					<span>Women</span>
					<span>Man</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className="item">
					<h4>Links</h4>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h4>About</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eum
						officiis repellendus quae fuga maiores qui saepe dolore facilis
						tenetur recusandae accusantium, rerum, sint nemo, eius asperiores
						velit neque optio.
					</p>
				</div>
				<div className="item">
					<h4>Contact</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
						inventore labore quo libero accusamus qui corrupti vero
						exercitationem ut molestiae, itaque facere voluptatem natus? Atque
						placeat nobis unde quibusdam eos.
					</p>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span className="logo">Wolf</span>
					<span className="copyright">
						© Copyright 2023. All Rights Reserved
					</span>
				</div>
				<div className="right">
					<img src="/img/payment.png" alt="payment" />
				</div>
			</div>
		</footer>
	)
}

export default Footer
