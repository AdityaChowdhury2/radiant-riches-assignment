import PropTypes from 'prop-types';
import Badge from './Badge';
import { IoIosArrowDown } from 'react-icons/io';
import Rating from 'react-rating';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import { MdOutlineCheck } from 'react-icons/md';

const SingleCard = ({ card }) => {
	return (
		<div className="card" key={card.id}>
			<div className="card-start">
				<img src={card.image} alt={card?.imageAlt} />
				<p className="caption">{card?.imageAlt}</p>
				{card?.badge ? (
					<Badge title={card?.badge?.title} icon={card?.badge?.icon} />
				) : (
					''
				)}
				<div className="index">{card.id}</div>
			</div>
			<div className="card-middle">
				<p className="title">
					<strong>{card.title.split('/b')[0]}</strong>
					{card.title.split('/b')[1]}
				</p>
				{card?.offers?.length ? (
					<span className="offer-badge">26% Off</span>
				) : (
					''
				)}
				<div className="highlights">
					<h4 className="highlights-heading">Main Highlights</h4>
					{/* Check if is CDK */}
					{card?.highlights.length > 1 ? (
						<>
							<ul className="cdk-highlights-content">
								{card?.highlights.map(highlight => (
									<li key={highlight.id}>
										<span className="cdk-highlights-rating">
											{highlight.rating}
										</span>{' '}
										{highlight.comment}
									</li>
								))}
							</ul>
							{card?.specialFeatures && (
								<div className="cdk-highlights-features-container">
									<p>Why we Love it</p>
									<ul className="cdk-highlights-features">
										{card?.specialFeatures.map(feature => (
											<li key={feature.id} className="cdk-highlights-feature">
												<span>
													<MdOutlineCheck />
												</span>{' '}
												{feature}
											</li>
										))}
									</ul>
								</div>
							)}
						</>
					) : (
						<p className="highlights-content">{card?.highlights[0]}</p>
					)}

					<a href="#">
						Show more <IoIosArrowDown />
					</a>
				</div>
			</div>
			<div className="card-end">
				<div className="rating-container">
					<div className="rating-card">
						<h3>{card.rating?.title}</h3>
						<p>{card?.rating?.ratingComment}</p>
						<Rating
							readonly
							stop={5}
							initialRating={card?.rating?.ratingCount}
							fractions={2}
							emptySymbol={<MdOutlineStarOutline color="#ffb80f" size={15} />}
							fullSymbol={<MdOutlineStarPurple500 color="#ffb80f" size={15} />}
						/>
					</div>
				</div>
				<button>View</button>
			</div>
		</div>
	);
};

SingleCard.propTypes = {
	card: PropTypes.object,
};
export default SingleCard;
