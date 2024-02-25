import builder from '../../assets/builder.png';
import './Deals.scss';
const Deals = () => {
	return (
		<section className="deals-container">
			<h3>Related deals you might like for</h3>

			<div className="deals-card-container">
				<div className="deals-card">
					<div className="header">
						<img src={builder} alt="Builder 1" />
					</div>
					<div className="badges">
						<span>20% Off</span>
						<span> Limited Time</span>
					</div>
					<p className="title">WebBuilder 1</p>
					<p className="description">Computer Modern clasic with wix support</p>
					<p>
						$39.96 <span className="actual-price">$59.96</span>{' '}
						<span className="discount">20% off</span>
					</p>
				</div>
				<div className="deals-card">
					<div className="header">
						<img src={builder} alt="Builder 1" />
					</div>
				</div>
				<div className="deals-card">
					<div className="header">
						<img src={builder} alt="Builder 1" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Deals;
