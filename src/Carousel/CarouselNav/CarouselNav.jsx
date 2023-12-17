import "./CarouselNav.css";

function CarouselNav({ handleNavigation }) {
	return (
		<div className="btn-container">
			<button onClick={handleNavigation} name="prev">
				&larr;
			</button>
			<button onClick={handleNavigation} name="next">
				&rarr;
			</button>
		</div>
	);
}

export default CarouselNav;
