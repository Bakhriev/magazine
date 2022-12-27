import React from "react"

import { data } from "./data"

import Card from "../Card/Card"

import "./FeaturedProducts.scss"

function FeaturedProducts({ type }) {
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
				{data?.map(item => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default FeaturedProducts
