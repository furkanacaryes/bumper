import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type ToolbarButtonProps = {
	type: 'primary' | 'secondary';
	label: string;
	onPress?: VoidFunction;
	icon?: IconDefinition
}

export const ToolbarButton: FC<ToolbarButtonProps> = ({ type, label, icon, onPress }) => {
	const typeClasses = type === 'primary'
		? 'border-black text-brand-darkgrey bg-brand-accent'
		: 'border-white text-white'

	return (
		<button
			className={`flex items-center gap-2 px-3 py-1 rounded border ${typeClasses}`}
			onClick={onPress}
		>
			<div className="flex flex-1">{label}</div>

			{icon ? (<FontAwesomeIcon icon={icon} width={12} />) : null}
		</button>

	)
}
