import { Link } from "@material-ui/core"
import React from "react"

import "./Card.scss"

function Card({ item }) {
	return (
		<Link to={`/product/${item.id}`}>
			<div className="card">
				<div className="image">
					{item.isNew && <span>New Season</span>}
					<img src={item.img} alt="image" className="mainImage" />
					{item.img2 && (
						<img src={item.img2} alt="image" className="secondImg" />
					)}
				</div>
				<h2>{item.title}</h2>
				<div className="prices">
					{item.oldPrice && <h3 className="oldPrice">${item.oldPrice}</h3>}
					<h3>${item.price}</h3>
				</div>
			</div>
		</Link>
	)
}

export default Card
