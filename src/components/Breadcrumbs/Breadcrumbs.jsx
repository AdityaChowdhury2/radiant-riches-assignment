const links = [
	{ id: 1, name: 'Home' },
	{
		id: 2,
		name: 'Hosting For All',
	},
	{
		id: 3,
		name: 'Hosting',
	},
	{
		id: 4,
		name: 'Hosting6',
	},
	{
		id: 5,
		name: 'Hosting5',
	},
];
import { MdKeyboardArrowRight } from 'react-icons/md';
import './Breadcrumbs.scss';
const Breadcrumbs = () => {
	return (
		<div>
			{/* make a breadcrumb component */}
			{/* Like Home > Hosting for all > Hosting > Hosting6 > Hosting5 */}
			<ul className="breadcrumb">
				{links.map((link, index, links) => (
					<li key={link.id}>
						<a>{link.name}</a>
						{index < links.length - 1 ? <MdKeyboardArrowRight size={18} /> : ''}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Breadcrumbs;
