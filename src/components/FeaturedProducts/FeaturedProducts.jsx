import React from "react"

import Card from "../Card/Card"

import "./FeaturedProducts.scss"

function FeaturedProducts({ type }) {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/14711716/pexels-photo-14711716.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: undefined,
			price: 12
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/14763089/pexels-photo-14763089.jpeg?auto=compress&cs=tinysrgb&w=600",
			img2: "https://images.pexels.com/photos/14763090/pexels-photo-14763090.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: 19,
			price: 12
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/14763062/pexels-photo-14763062.jpeg?auto=compress&cs=tinysrgb&w=600",
			img2: "https://images.pexels.com/photos/14763047/pexels-photo-14763047.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: 19,
			price: 12
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/8396733/pexels-photo-8396733.jpeg?auto=compress&cs=tinysrgb&w=600",
			img2: "https://images.pexels.com/photos/8396734/pexels-photo-8396734.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: 19,
			price: 12
		}
	]

	return (
		<div className="featuredProducts">
			<div className="top">
				<h2>{type} products</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
					molestias quos praesentium excepturi aliquid deleniti incidunt quidem!
					Accusamus nemo cumque nisi consequatur iure. Vitae explicabo aut sit
					ratione, repudiandae error.
				</p>
			</div>
			<div className="bottom">
				{data.map(item => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default FeaturedProducts
