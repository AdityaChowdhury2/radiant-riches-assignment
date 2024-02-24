import './Heading.scss';
import { IoIosArrowDown } from 'react-icons/io';
// import { CiCircleCheck, CiCircleInfo } from 'react-icons/ci';
import {
	IoIosInformationCircleOutline,
	IoIosCheckmarkCircleOutline,
} from 'react-icons/io';
const Heading = () => {
	return (
		<>
			<h1 className="heading">Best Website builders in the US</h1>
			<div className="sub-heading">
				<div className="sub-heading-options">
					<div className="sub-heading-option">
						<IoIosCheckmarkCircleOutline /> Last Updated - February 24, 2024
					</div>
					<div className="sub-heading-option">
						<IoIosInformationCircleOutline /> Advertising Disclosure
					</div>
				</div>
				<div className="sub-heading-option">
					Top Relevant <IoIosArrowDown />
				</div>
			</div>
		</>
	);
};

export default Heading;
