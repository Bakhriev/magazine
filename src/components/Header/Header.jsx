import React from "react"
import { Link } from "react-router-dom"

import "./Header.scss"

import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import SearchIcon from "@material-ui/icons/Search"
import PersonIcon from "@material-ui/icons/PersonOutlineOutlined"
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined"

function Header() {
	return (
		<header className="header">
			<div className="wrapper">
				<div className="left">
					<div className="item">
						<img src="" alt="usa flag" />
						<ArrowDownIcon />
					</div>
					<div className="item">
						<span>USD</span>
						<ArrowDownIcon />
					</div>
					<div className="item">
						<Link to="/products/1">Women</Link>
					</div>
					<div className="item">
						<Link to="/products/2">Men</Link>
					</div>
					<div className="item">
						<Link to="/products/3">Children</Link>
					</div>
				</div>
				<div className="center">
					<Link to="/">Wolf</Link>
				</div>
				<div className="right">
					<div className="item">
						<Link>Homepage</Link>
					</div>
					<div className="item">
						<Link>About</Link>
					</div>
					<div className="item">
						<Link>Contact</Link>
					</div>
					<div className="item">
						<Link>Stores</Link>
					</div>
					<div className="icons">
						<SearchIcon />
						<PersonIcon />
						<FavoriteIcon />
						<div className="cartIcon">
							<ShoppingCartIcon />
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

//https://github.com/safak/youtube2022.git
