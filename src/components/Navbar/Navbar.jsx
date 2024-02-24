import { CiSearch } from 'react-icons/ci';
import './Navbar.scss';
const Navbar = () => {
	return (
		<div className="navbar">
			<ul className="navbar-content">
				<li className="search-container">
					<input type="text" className="search-input" />
					<CiSearch size={25} className="search-input-icon" />
				</li>
				<li>
					<a href="#">Categories</a>
				</li>
				<li>
					<a href="#">Website Builders</a>
				</li>
				<li>
					<a href="#">Today&apos;s Deal</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
