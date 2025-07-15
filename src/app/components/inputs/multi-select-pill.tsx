"use client";

import { FC } from "react";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SelectablePillProps = {
	name: string;
	label: string;
	selected?: boolean;
	onToggle: (name: string, selected: boolean) => void;
}

export const SelectablePill: FC<SelectablePillProps> = ({ name, label, selected = false, onToggle }) => {
	return (
		<button
			className={`flex justify-between items-center gap-4 text-base px-6 py-3 rounded-full border border-brand-darkgrey ${selected ? 'bg-brand-darkgrey text-white hover:bg-brand-darkgrey hover:text-white' : 'hover:bg-gray-300 hover:text-brand-darkgrey'}`}
			onClick={() => onToggle(name, !selected)}
		>
			<span>{label}</span>
			<FontAwesomeIcon icon={selected ? faCheck : faPlus} className="text-inherit" width={16} />
		</button>
	)
}
