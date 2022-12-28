import React from "react"

import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined"

import { data } from "./data"

import "./Cart.scss"

function Cart() {
	return (
		<div className="cart">
			<h1>Products un your cart</h1>
			{data?.map(item => (
				<div className="item" key={item.id}>
					<img src={item.img} alt="t-shirt" />
					<div className="details">
						<h2>{item.title}</h2>
						<p>{item.description.substring(0, 100)}</p>
						<div className="price">1 x ${item.price}</div>
					</div>
					<DeleteOutlineOutlinedIcon className="delete" />
				</div>
			))}
			<div className="total">
				<span>Subtotal</span>
				<span>$123</span>
			</div>
			<button>Proceed To Checkout</button>
			<span className="reset">Reset Cart</span>
		</div>
	)
}

export default Cart
