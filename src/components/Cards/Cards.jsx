import PropTypes from 'prop-types';
import './Cards.scss';

import SingleCard from './SingleCard';

const Cards = ({ cardsData }) => {
	return (
		<section className="cards-container">
			{cardsData &&
				cardsData.map(card => <SingleCard key={card.id} card={card} />)}
		</section>
	);
};

Cards.propTypes = {
	cardsData: PropTypes.array,
};
export default Cards;
