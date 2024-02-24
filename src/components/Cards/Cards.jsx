import './Cards.scss';
import builder from '../../assets/builder.png';
import { IoIosArrowDown } from 'react-icons/io';

const Cards = () => {
	return (
		<section className="cards-container">
			<div className="card">
				<div className="card-start">
					<img src={builder} alt="Builder 1" />
					<p>Builder 1</p>
				</div>
				<div className="card-middle">
					<p>
						<strong>WixPro 72-Inch Responsive Website Builder- </strong>
						Comprehensive Digital Platform Creation Tool, Streamlined Design
						Interface for Professional Websites and Online Stores (Black/Blue)
					</p>
					<h5>Main Highlights</h5>
					<p>
						[What You Get]: Receive the WixPro website builder suite, access to
						premium design templates, an extensive library of widgets and apps,
						and detailed step-by-step guides.
					</p>

					<a href="#">
						Show more <IoIosArrowDown />
					</a>
				</div>
				<div className="card-end">
					<div className="rating-card">
						<h3>5.0</h3>
						<p>Exceptional</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cards;
