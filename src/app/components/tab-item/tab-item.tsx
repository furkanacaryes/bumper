import { FC } from "react"

import styles from './tab-item.module.css'

export type TabItemProps = {
	label: string,
	active?: boolean
}

export const TabItem: FC<TabItemProps> = ({ label, active }) => {
	return (
		<button className={`px-6 py-3 ${styles.tabItem} ${active ? styles.tabItemActive : ''}`}> {label}</button >
	)
}
