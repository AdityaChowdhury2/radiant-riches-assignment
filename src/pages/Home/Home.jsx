import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Cards from '../../components/Cards/Cards';
import Deals from '../../components/Deals/Deals';
import Heading from '../../components/Heading/Heading';
import Navbar from '../../components/Navbar/Navbar';
import Subscription from '../../components/Subscription/Subscription';
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
				<Subscription />
			</main>
		</div>
	);
};

export default Home;
