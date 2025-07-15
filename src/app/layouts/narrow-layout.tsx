import { Toolbar } from "../components"

export const NarrowLayout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<div className="min-h-screen flex flex-col bg-brand-secondary text-white py-[100px]">
			<Toolbar />

			<div className="container mx-auto max-w-[770px] pt-12 px-4">
				{children}
			</div>
		</div>
	)
}
