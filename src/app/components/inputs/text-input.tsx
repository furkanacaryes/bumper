import { FC } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TextInputProps = {
	label?: string;
	value?: string;
	onChange: VoidFunction;
	icon?: IconDefinition;
	required?: boolean;
}

export const TextInput: FC<TextInputProps> = ({ label, icon, value, onChange }) => {
	return (
		<div className="input flex flex-col gap-2">
			<div className="input-label space-x-2 text-base font-bold">
				{icon ? (<FontAwesomeIcon icon={icon} className="text-brand-orange" />) : null}

				<span>
					{label}
				</span>
			</div>

			<div className="input-control border border-brand-darkgrey rounded-full w-full py-2 px-4">
				<input type="text" className="w-full focus:outline-none" value={value} onChange={onChange} />
			</div>
		</div>
	)
}
