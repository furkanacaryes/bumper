"use client";

import { FC, useState } from "react";
import { faCheck, faPlus, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type MultiSelectPillOptions = {
	label: string;
	value: string | number;
	selected?: boolean;
}

export type SelectablePillProps = MultiSelectPillOptions & {
	onToggle: (value: number | string) => void;
}

export const SelectablePill: FC<SelectablePillProps> = ({ label, value, selected, onToggle }) => {
	return (
		<button
			className={`flex justify-between items-center gap-4 text-base px-6 py-3 rounded-full border border-brand-darkgrey ${selected ? 'bg-brand-darkgrey text-white hover:bg-brand-darkgrey hover:text-white' : 'hover:bg-gray-300 hover:text-brand-darkgrey'}`}
			onClick={() => onToggle(value)}
		>
			<span>{label}</span>
			<FontAwesomeIcon icon={selected ? faCheck : faPlus} className="text-inherit" width={16} />
		</button>
	)
}

export type MultiSelectPillProps = {
	label: string;
	description?: string;
	icon: IconDefinition;
	options: MultiSelectPillOptions[]
}

export const MultiSelectPill: FC<MultiSelectPillProps> = ({ label, description, icon, options }) => {
	const initialSelection = options.filter(option => option.selected).map(option => option.value)

	const [selection, setSelection] = useState(initialSelection)

	const toggleSelect = (value: number | string) => {
		setSelection(prev => {
			const isAlreadySelected = prev.includes(value)

			if (isAlreadySelected) {
				return prev.filter((inside) => inside !== value)
			}

			return [...prev, value]
		})
	}

	const checkIfSelected = (value: string | number) => selection.includes(value)

	return (
		<div className="flex flex-col gap-2">
			<div>
				<div className="space-x-2 text-base font-bold">
					<span><FontAwesomeIcon icon={icon} width={16} className="text-brand-orange" /></span>
					<span>{label}</span>
				</div>

				<div className="text-brand-tintedgrey">{description}</div>
			</div>

			<div className="flex flex-wrap gap-3">
				{options.map((pill) => (
					<SelectablePill
						key={pill.value}
						{...pill}
						selected={checkIfSelected(pill.value)}
						onToggle={toggleSelect}
					/>
				))}
			</div>
		</div>
	)
}
