import "./Carousel.css";
import images from "../assets";
import { useState } from "react";
import CarouselNav from "./CarouselNav/CarouselNav";
import CarouselImages from "./CarouselImages/CarouselImages";
export default function Carousel() {
	const [activeImage, setActiveImage] = useState(0);

	function handleNavigation(e) {
		const { name } = e.target;
		if (name == "next") {
			if (activeImage === images.length - 1) {
				return setActiveImage(0);
			}
			setActiveImage((prev) => prev + 1);
		} else if (name === "prev") {
			if (activeImage === 0) {
				return setActiveImage(images.length - 1);
			}
			setActiveImage((prev) => prev - 1);
		} else {
			return;
		}
	}
	return (
		<div>
			<h1>Carousel</h1>
			<img src={images[activeImage]} alt="" />
			<CarouselImages
				images={images}
				activeImage={activeImage}
				setActiveImage={setActiveImage}
			/>
			<CarouselNav handleNavigation={handleNavigation} />
		</div>
	);
}
