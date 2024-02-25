import PropTypes from 'prop-types';
const DealsCard = ({ deal }) => {
	return (
		<div className="deals-card">
			<div className="header">
				<img src={deal.image} alt={`${deal.title}`} />
			</div>
			<div className="badges">
				{deal.badges.map((badge, index) => (
					<span key={index}>{badge}</span>
				))}
			</div>
			<p className="title">{deal.title}</p>
			<p className="description">{deal.description}</p>
			<p className="price">
				{deal.price} <span className="actual-price">{deal.actualPrice}</span>{' '}
				<span className="discount">{deal.discount}</span>
			</p>
			<button>View</button>
		</div>
	);
};

DealsCard.propTypes = {
	deal: PropTypes.object,
};

export default DealsCard;
