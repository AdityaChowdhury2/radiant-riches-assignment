import builder from '../../assets/builder.png';
import './Deals.scss';
import DealsCard from './DealsCard';

const dealsData = [
	{
		id: 1,
		title: 'WebBuilder 1',
		description: 'Computer Modern clasic with wix support',
		price: '$39.96',
		actualPrice: '$59.96',
		discount: '(20% Off)',
		image: builder,
		badges: ['20% Off', 'Limited Time'],
	},
	{
		id: 2,
		title: 'WebBuilder 1',
		description: 'Computer Modern clasic with wix support',
		price: '$39.96',
		actualPrice: '$59.96',
		discount: '(20% Off)',
		image: builder,
		badges: ['20% Off', 'Limited Time'],
	},
	{
		id: 3,
		title: 'WebBuilder 1',
		description: 'Computer Modern clasic with wix support',
		price: '$39.96',
		actualPrice: '$59.96',
		discount: '(20% Off)',
		image: builder,
		badges: ['20% Off', 'Limited Time'],
	},
];

const Deals = () => {
	return (
		<section className="deals-container">
			<h3>Related deals you might like for</h3>

			<div className="deals-card-container">
				{dealsData.map(deal => (
					<DealsCard key={deal.id} deal={deal} />
				))}
			</div>
		</section>
	);
};

export default Deals;
