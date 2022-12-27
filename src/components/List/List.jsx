import React from "react"

import Card from "../Card/Card"

import { data } from "../FeaturedProducts/data"

import "./List.scss"

function List() {
	return (
		<div className="list">
			{data?.map(item => (
				<Card item={item} key={item.id} />
			))}
		</div>
	)
}

export default List
