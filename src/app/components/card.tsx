import { FC, PropsWithChildren } from "react"

export const Card: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex flex-col gap-8 rounded-4xl bg-white text-brand-darkgrey p-12 border border-brand-darkgrey">{children}</div>
	)
}
