import { CiSearch } from 'react-icons/ci';
import './Navbar.scss';
const Navbar = () => {
	return (
		<header className="navbar">
			<div className="navbar-container">
				<div className="navbar-content">
					<div className="search-container">
						<input type="text" className="search-input" />
						<CiSearch size={25} className="search-input-icon" />
					</div>
					<ul className="navbar-menu">
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
			</div>
		</header>
	);
};

export default Navbar;
