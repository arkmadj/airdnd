import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";

export const catergories = [
	{
		label: "Beach",
		icon: TbBeach,
		description: "This property is close to the beach",
	},
	{
		label: "Windmill",
		icon: GiWindmill,
		description: "This property has windmills",
	},
	{
		label: "Modern",
		icon: MdOutlineVilla,
		description: "This property is modern",
	},
];
type Props = {};

const Categories = (props: Props) => {
	return (
		<Container>
			<div className="flex flex-row justify-between pt-4 overflow-x-auto">
				{catergories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						description={item.description}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;
