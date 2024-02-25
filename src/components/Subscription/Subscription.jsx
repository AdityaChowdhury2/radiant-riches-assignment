import './Subscription.scss';
const Subscription = () => {
	return (
		<section className="subscription-section">
			<h3>
				Sign up and get exclusive <br /> special deals
			</h3>
			<div className="input-container">
				<input type="email" placeholder="Enter your email" />
				<button>Sign Up</button>
			</div>
		</section>
	);
};

export default Subscription;
