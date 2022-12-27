import React, { useState } from "react"

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"

import { data } from "./data"

import "./Product.scss"

function Product() {
	const [selectedImg, setSelectedImg] = useState(0)
	const [quantity, setQuantity] = useState(1)

	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img src={data[0]} alt="t-shirt" onClick={() => setSelectedImg(0)} />
					<img src={data[1]} alt="t-shirt" onClick={() => setSelectedImg(1)} />
				</div>
				<div className="mainImg">
					<img src={data[selectedImg]} alt="" />
				</div>
			</div>
			<div className="right">
				<h1>Title</h1>
				<span className="price">$199</span>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
					eaque nobis necessitatibus earum quasi assumenda dolorum molestias
					vero nisi atque, magni tempora blanditiis totam a ratione minima sunt
					ullam?
				</p>
				<div className="quantity">
					<button onClick={() => setQuantity(pre => (pre === 1 ? 1 : pre - 1))}>
						-
					</button>
					<b>{quantity}</b>
					<button onClick={() => setQuantity(pre => pre + 1)}>+</button>
				</div>
				<button className="add">
					<AddShoppingCartIcon /> Add To Cart
				</button>
				<div className="link">
					<div className="item">
						<FavoriteBorderIcon /> Add To Wish List
					</div>
					<div className="item">
						<BalanceIcon /> Add To Compare
					</div>
				</div>
				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
				<hr />
				<div className="info details">
					<span>Description</span>
					<hr />
					<span>Additional Information</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	)
}

export default Product
