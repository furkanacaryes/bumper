"use client";

import { useState, useEffect, useMemo } from "react";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

import { Card, TextInput } from "../components";
import { useGetAllPartners } from "../services";

export default function PartnerRegister() {
	const { data: partners } = useGetAllPartners();

	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search);
		}, 300);
		return () => clearTimeout(handler);
	}, [search]);

	const filteredPartners = useMemo(() => {
		if (!partners) return [];

		const searchLower = debouncedSearch.toLowerCase();

		return partners.filter(partner =>
			partner.company.toLowerCase().includes(searchLower) ||
			partner.name?.toLowerCase().includes(searchLower) ||
			partner.mobile_phone?.toLowerCase().includes(searchLower) ||
			partner.email_address?.toLowerCase().includes(searchLower)
		);
	}, [partners, debouncedSearch]);

	return (
		<div className="flex flex-col gap-5">
			<h2 className="font-bold text-[38px]">Interested Dealerships</h2>

			<Card>
				<TextInput
					label="Search Company"
					icon={faBuilding}
					placeholder="Start typing name, company, phone or email for search"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</Card>

			{filteredPartners?.map(partner => (
				<Card key={partner.company}>
					<div className="divide-y divide-gray-200">
						<div className="font-bold text-3xl pb-4">{partner.name}</div>

						<div className="flex justify-between items-center py-4">
							<span className="font-semibold">Company</span>
							<span className="">{partner.company}</span>
						</div>
						<div className="flex justify-between items-center py-4">
							<span className="font-semibold">Mobile phone number</span>
							<span className="">{partner.mobile_phone}</span>
						</div>
						<div className="flex justify-between items-center py-4">
							<span className="font-semibold">Email address</span>
							<span className="">{partner.email_address}</span>
						</div>
						<div className="flex justify-between items-center py-4">
							<span className="font-semibold">Postcode</span>
							<span className="">{partner.postcode}</span>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
};
