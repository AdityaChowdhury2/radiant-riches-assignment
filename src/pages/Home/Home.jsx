import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Cards from '../../components/Cards/Cards';
import Deals from '../../components/Deals/Deals';
import Heading from '../../components/Heading/Heading';
import Navbar from '../../components/Navbar/Navbar';
import Tools from '../../components/Tools/Tools';

const Home = () => {
	return (
		<div>
			<Navbar />
			<main className="container">
				<Heading />
				<Tools />
				<Breadcrumbs />
				<Cards />
				<Deals />
			</main>
		</div>
	);
};

export default Home;
