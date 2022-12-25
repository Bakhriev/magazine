import React, { useState } from "react"

import PrevIcon from "@material-ui/icons/ArrowLeft"
import NextIcon from "@material-ui/icons/ArrowRight"

import "./Slider.scss"

function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const data = [
		"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
	]

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1)
	}
	const nextSlide = () => {
		setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1)
	}

	return (
		<div className="slider">
			<div
				className="container"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				<img src={data[0]} alt="model images" />
				<img src={data[1]} alt="model images" />
				<img src={data[2]} alt="model images" />
			</div>
			<div className="icons">
				<div className="icon" onClick={prevSlide}>
					<PrevIcon />
				</div>
				<div className="icon" onClick={nextSlide}>
					<NextIcon />
				</div>
			</div>
		</div>
	)
}

export default Slider
