import './Tools.scss';
const tools = [
	{
		id: 1,
		name: 'Tools',
	},
	{
		id: 2,
		name: 'AWS Builder',
	},
	{
		id: 3,
		name: 'Start Build',
	},
	{
		id: 4,
		name: 'Build Supplies',
	},
	{
		id: 5,
		name: 'Tooling',
	},
	{
		id: 6,
		name: 'BlueHosting',
	},
];

const Tools = () => {
	return (
		<section className="tools-badges-container">
			{tools.map(tool => (
				<div className="badge" key={tool.id}>
					{tool.name}
				</div>
			))}
		</section>
	);
};

export default Tools;
