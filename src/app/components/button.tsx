import { FC } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export type ButtonProps = {
	text: string;
	onPress: VoidFunction;
	className?: string;
	disabled?: boolean;
	dataTestId?: string;
}

export const Button: FC<ButtonProps> = ({ text, onPress, className, disabled, dataTestId }) => {
	return (
		<button
			disabled={disabled}
			className={`flex justify-between items-center gap-4 bg-brand-accent text-brand-darkgrey text-base px-6 py-3 rounded-full border border-brand-darkgrey hover:bg-brand-accent hover:text-white active:bg-brand-darkgrey active:text-white ${className}`}
			onClick={onPress}
			data-testid={dataTestId}
		>
			<span>{text}</span>
			<FontAwesomeIcon icon={faArrowRightLong} className="text-inherit" width={16} />
		</button>
	)
}
