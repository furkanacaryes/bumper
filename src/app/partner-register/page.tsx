"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBuilding, faEnvelope, faHome, faMobilePhone, faUser, faWrench } from "@fortawesome/free-solid-svg-icons";

import { MultiSelectPill, TextInput, Button } from "../components";

export default function PartnerRegister() {
	const router = useRouter();
	return (
		<div className="flex flex-col gap-4">
			<button onClick={router.back} className="text-3xl flex">
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>

			<h2 className="font-bold text-[38px]">Join our network</h2>

			<span>
				Offer <strong>PayLater</strong> to split servicing and repair work into monthly instalments - interest-free.
				<br />
				Use <strong>PayNow</strong> to take secure payments online.
			</span>

			<div className="flex flex-col gap-8 rounded-4xl bg-white text-brand-darkgrey p-12 border border-brand-darkgrey">
				<div className="flex flex-col text-xl">
					<span className="font-bold">Join our network</span>

					<span>Free to join, no monthly fees</span>
				</div>

				<TextInput label="Name" icon={faUser} />
				<TextInput label="Company" icon={faBuilding} />
				<TextInput label="Mobile phone number" icon={faMobilePhone} />
				<TextInput label="Email address" icon={faEnvelope} />
				<TextInput label="Postcode" icon={faHome} />

				<MultiSelectPill
					label="What services are you interested in?"
					description="Please select the services you’re interested in offering your customers"
					icon={faWrench}
					options={[{
						label: 'PayLater',
						value: 'pay-later'
					},
					{
						label: 'PayNow',
						value: 'pay-now'
					}]}
				/>

				<Button text="Register" className="justify-center" />

				<div className="flex justify-center gap-1">
					<span className="text-brand-darkgrey">Already registered?</span>
					<Link href="#">
						<span className="text-brand-accent">
							Login
						</span>
					</Link>
				</div>

			</div>
		</div>
	);
};
