import React from "react"

import { Link } from "react-router-dom"

import "./Categories.scss"

function Categories() {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img
						src="https://images.pexels.com/photos/13338037/pexels-photo-13338037.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="clothe"
					/>
					<Link className="link" to="products/1">
						<button>Sale</button>
					</Link>
				</div>
				<div className="row">
					<img
						src="https://images.pexels.com/photos/8801145/pexels-photo-8801145.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="clothe"
					/>
					<Link className="link" to="products/1">
						<button>Woman</button>
					</Link>
				</div>
			</div>
			<div className="col">
				<div className="row">
					<img
						src="https://images.pexels.com/photos/6667720/pexels-photo-6667720.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="clothe"
					/>
					<Link className="link" to="products/1">
						<button>New Season</button>
					</Link>
				</div>
			</div>
			<div className="col col-l">
				<div className="row">
					<div className="col">
						<div className="row">
							<img
								src="https://images.pexels.com/photos/6598738/pexels-photo-6598738.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="clothe"
							/>
							<Link className="link" to="products/1">
								<button>Sale</button>
							</Link>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img
								src="https://images.pexels.com/photos/14799758/pexels-photo-14799758.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="clothe"
							/>
							<Link className="link" to="products/1">
								<button>Sale</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<img
						src="https://images.pexels.com/photos/8396730/pexels-photo-8396730.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="clothe"
					/>
					<Link className="link" to="products/1">
						<button>Sale</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Categories
