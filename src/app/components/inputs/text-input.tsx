import { FC } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TextInputProps = {
	name?: string;
	label?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	icon?: IconDefinition;
	required?: boolean;
	error?: string | false | undefined;
}

export const TextInput: FC<TextInputProps> = ({ name, label, placeholder, icon, value, onChange, onBlur, error }) => {
	return (
		<div className="input flex flex-col gap-2">
			<div className="input-label space-x-2 text-base font-bold">
				{icon ? (<FontAwesomeIcon icon={icon} className="text-brand-orange" />) : null}

				<span>
					{label}
				</span>
			</div>

			<div className="input-control border border-brand-darkgrey rounded-full w-full py-2 px-4">
				<input name={name} type="text" placeholder={placeholder} className="w-full focus:outline-none" value={value} onChange={onChange} onBlur={onBlur} />
			</div>
			{error && <div className="text-red-500 text-sm">{error}</div>}
		</div>
	)
}
