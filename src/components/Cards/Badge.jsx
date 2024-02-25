import PropTypes from 'prop-types';
const Badge = ({ title, icon: Icon }) => {
	return (
		<div className="badge">
			<Icon size={12} /> {title}
		</div>
	);
};

Badge.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.elementType,
};

export default Badge;
