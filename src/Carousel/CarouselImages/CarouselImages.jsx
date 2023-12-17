import "./CarouselImages.css";

export default function CarouselImages({
	images,
	activeImage,
	setActiveImage,
}) {
	return (
		<div className="small-img">
			{images.map((image, index) => (
				<img
					src={image}
					key={index}
					className={`${index === activeImage ? "active" : ""}`}
					onClick={() => setActiveImage(index)}
				/>
			))}
		</div>
	);
}
