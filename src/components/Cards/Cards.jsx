import './Cards.scss';
import builder from '../../assets/builder.png';
import { IoIosArrowDown } from 'react-icons/io';
import Rating from 'react-rating';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import { BsTrophy } from 'react-icons/bs';
import { IoDiamondOutline } from 'react-icons/io5';
import { MdOutlineCheck } from 'react-icons/md';

const Cards = () => {
	return (
		<section className="cards-container">
			<div className="card">
				<div className="card-start">
					<img src={builder} alt="Builder 1" />
					<p className="caption">Builder 1</p>
					<div className="badge">
						<BsTrophy size={12} /> Best Choice
					</div>
					<div className="index">1</div>
				</div>
				<div className="card-middle">
					<p className="title">
						<strong>WixPro 72-Inch Responsive Website Builder- </strong>
						Comprehensive Digital Platform Creation Tool, Streamlined Design
						Interface for Professional Websites and Online Stores (Black/Blue)
					</p>
					<div className="highlights">
						<h4 className="highlights-heading">Main Highlights</h4>
						<p className="highlights-content">
							[What You Get]: Receive the WixPro website builder suite, access
							to premium design templates, an extensive library of widgets and
							apps, and detailed step-by-step guides.
						</p>
						<a href="#">
							Show more <IoIosArrowDown />
						</a>
					</div>
				</div>
				<div className="card-end">
					<div className="rating-container">
						<div className="rating-card">
							<h3>9.8</h3>
							<p>Exceptional</p>
							<Rating
								readonly
								stop={5}
								initialRating={5}
								fractions={2}
								emptySymbol={<MdOutlineStarOutline color="#ffb80f" size={15} />}
								fullSymbol={
									<MdOutlineStarPurple500 color="#ffb80f" size={15} />
								}
							/>
						</div>
					</div>
					<button>View</button>
				</div>
			</div>
			<div className="card">
				<div className="card-start">
					<img src={builder} alt="Builder" />
					<p className="caption">Builder</p>
					<div className="badge">
						<IoDiamondOutline size={12} /> Best Value
					</div>
					<div className="index">2</div>
				</div>
				<div className="card-middle">
					<p className="title">
						<strong>SiteCraft 68-Inch Ultimate Web Design Studio- </strong>
						Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
						Dynamic Websites and E-commerce Platforms (Green/White)
					</p>
					<div className="highlights">
						<h4 className="highlights-heading">Main Highlights</h4>
						<p className="highlights-content">
							[What You Get]: Gain access to the SiteCraft design studio,
							featuring a robust selection of design elements, SEO optimization
							tools, and e-commerce integrations.
						</p>
						<a href="#">
							Show more <IoIosArrowDown />
						</a>
					</div>
				</div>
				<div className="card-end">
					<div className="rating-container">
						<div className="rating-card">
							<h3>9.5</h3>
							<p>Excellent</p>
							<Rating
								readonly
								stop={5}
								initialRating={4.5}
								fractions={2}
								emptySymbol={<MdOutlineStarOutline color="#ffb80f" size={15} />}
								fullSymbol={
									<MdOutlineStarPurple500 color="#ffb80f" size={15} />
								}
							/>
						</div>
					</div>
					<button>View</button>
				</div>
			</div>
			<div className="card">
				<div className="card-start">
					<img src={builder} alt="Builder 1" />
					<p className="caption">Builder 1</p>
					{false && (
						<div className="badge">
							<BsTrophy size={12} /> Best Choice
						</div>
					)}
					<div className="index">3</div>
				</div>
				<div className="card-middle">
					<p className="title">
						<strong>WixPro 72-Inch Responsive Website Builder- </strong>
						Comprehensive Digital Platform Creation Tool, Streamlined Design
						Interface for Professional Websites and Online Stores (Black/Blue)
					</p>
					<div className="highlights">
						<h4 className="highlights-heading">Main Highlights</h4>
						<p className="highlights-content">
							[What You Get]: Receive the WixPro website builder suite, access
							to premium design templates, an extensive library of widgets and
							apps, and detailed step-by-step guides.
						</p>
						<a href="#">
							Show more <IoIosArrowDown />
						</a>
					</div>
				</div>
				<div className="card-end">
					<div className="rating-container">
						<div className="rating-card">
							<h3>9.3</h3>
							<p>Exceptional</p>
							<Rating
								readonly
								stop={5}
								initialRating={5}
								fractions={2}
								emptySymbol={<MdOutlineStarOutline color="#ffb80f" size={15} />}
								fullSymbol={
									<MdOutlineStarPurple500 color="#ffb80f" size={15} />
								}
							/>
						</div>
					</div>
					<button>View</button>
				</div>
			</div>
			<div className="card">
				<div className="card-start">
					<img src={builder} alt="CDK" />
					<p className="caption">CDK</p>
					{false && (
						<div className="badge">
							<BsTrophy size={12} /> Best Choice
						</div>
					)}
					<div className="index">4</div>
				</div>
				<div className="card-middle">
					<p className="title">
						<strong>CDK Resposive Builder: </strong>
						An extensive library of widgets and apps, and detailed step-by-step
						guides
					</p>
					{true && <span className="offer-badge">26% Off</span>}
					<div className="highlights">
						<h4 className="highlights-heading">Main Highlights</h4>
						{/* Check if is CDK */}
						{true ? (
							<>
								<ul className="cdk-highlights-content">
									<li>
										<span className="cdk-highlights-rating">9.9</span> Building
										Responsive
									</li>
									<li>
										<span className="cdk-highlights-rating">8.9</span> Cool
									</li>
									<li>
										<span className="cdk-highlights-rating">8.9</span> Docs
									</li>
								</ul>
								<div className="cdk-highlights-features-container">
									<p>Why we Love it</p>
									<ul className="cdk-highlights-features">
										<li className="cdk-highlights-feature">
											<span>
												<MdOutlineCheck />
											</span>{' '}
											Documentation
										</li>
										<li className="cdk-highlights-feature">
											<span>
												<MdOutlineCheck />
											</span>{' '}
											Easy Use
										</li>
										<li className="cdk-highlights-feature">
											<span>
												<MdOutlineCheck />
											</span>{' '}
											Out Of Box
										</li>
									</ul>
								</div>
							</>
						) : (
							<p className="highlights-content">
								[What You Get]: Receive the WixPro website builder suite, access
								to premium design templates, an extensive library of widgets and
								apps, and detailed step-by-step guides.
							</p>
						)}

						<a href="#">
							Show more <IoIosArrowDown />
						</a>
					</div>
				</div>
				<div className="card-end">
					<div className="rating-container">
						<div className="rating-card">
							<h3>9.3</h3>
							<p>Exceptional</p>
							<Rating
								readonly
								stop={5}
								initialRating={5}
								fractions={2}
								emptySymbol={<MdOutlineStarOutline color="#ffb80f" size={15} />}
								fullSymbol={
									<MdOutlineStarPurple500 color="#ffb80f" size={15} />
								}
							/>
						</div>
					</div>
					<button>View</button>
				</div>
			</div>
		</section>
	);
};

export default Cards;
