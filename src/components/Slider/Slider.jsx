import React, { useState } from "react"

import PrevIcon from "@material-ui/icons/ArrowLeft"
import NextIcon from "@material-ui/icons/ArrowRight"

import { data } from "./data"

import "./Slider.scss"

function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0)

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
				{data?.map(elem => (
					<img src={elem} alt="new brand" />
				))}
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
