import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Cards from '../../components/Cards/Cards';
import Deals from '../../components/Deals/Deals';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';
import Navbar from '../../components/Navbar/Navbar';
import Subscription from '../../components/Subscription/Subscription';
import Tools from '../../components/Tools/Tools';
import { BsTrophy } from 'react-icons/bs';
import builder from '../../assets/builder.png';
import { IoDiamondOutline } from 'react-icons/io5';

const cardsData = [
	{
		id: 1,
		image: builder,
		imageAlt: 'Builder 1',
		title:
			'WixPro 72-Inch Responsive Website Builder-/b Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
		rating: { title: 9.8, ratingCount: 5, ratingComment: 'Exceptional' },
		highlights: [
			'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
		],
		badge: { title: 'Best Choice', icon: BsTrophy },

		offers: [
			// {
			// 	id: 1,
			// 	title: '20% Off',
			// },
		],
	},
	{
		id: 2,
		image: builder,
		imageAlt: 'Builder',
		title:
			'SiteCraft 68-Inch Ultimate Web Design Studio-/b Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
		rating: { title: 9.5, ratingCount: 4.5, ratingComment: 'Excellent' },
		badge: { title: 'Best Value', icon: IoDiamondOutline },
		highlights: [
			'[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
		],
		offers: [],
	},
	{
		id: 3,
		image: builder,
		imageAlt: 'Builder 1',
		title:
			'WixPro 72-Inch Responsive Website Builder-/b Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
		rating: { title: 9.3, ratingCount: 5, ratingComment: 'Exceptional' },
		// badge: { title: 'Best Value', icon: IoDiamondOutline },
		highlights: [
			'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
		],
		offers: [],
	},
	{
		id: 4,
		image: builder,
		imageAlt: 'CDK',
		title:
			'CDK Resposive Builder:/b An extensive library of widgets and apps, and detailed step-by-step guides',
		rating: { title: 9.1, ratingCount: 4, ratingComment: 'Very Good' },
		// badge: { title: 'Best Value', icon: IoDiamondOutline },
		highlights: [
			{
				id: 1,
				rating: 9.9,
				comment: 'Building Responsive',
			},
			{
				id: 2,
				rating: 8.9,
				comment: 'Cool',
			},
			{
				id: 3,
				rating: 8.9,
				comment: 'Docs',
			},
		],
		specialFeatures: ['Documentation', 'Easy Use', 'Out Of Box'],
		offers: [
			{
				id: 1,
				title: '20% Off',
			},
		],
	},
];

const Home = () => {
	return (
		<div>
			<Navbar />
			<main className="container">
				<Heading />
				<Tools />
				<Breadcrumbs />
				<Cards cardsData={cardsData} />
				<Deals />
				<Subscription />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
