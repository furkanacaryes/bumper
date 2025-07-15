"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBuilding, faEnvelope, faHome, faMobilePhone, faUser, faWrench } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAddOnePartner } from '../services';
import { Button, SelectablePill, TextInput } from "../components";

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.matches(/^[\w\s]*$/, 'Name must be alphanumeric')
		.max(255, 'Max 255 characters')
		.required('Required'),
	company: Yup.string()
		.max(255, 'Max 255 characters')
		.required('Required'),
	mobile_phone: Yup.string()
		.matches(/^0(\s*)(7)(\s*)(\d(\s*)){9}$/, 'Invalid UK mobile number')
		.required('Required'),
	email_address: Yup.string()
		.email('Invalid email')
		.min(5, 'Min 5 characters')
		.max(255, 'Max 255 characters')
		.required('Required'),
	postcode: Yup.string()
		.matches(/^[\w\s]*$/, 'Postcode must be alphanumeric')
		.max(30, 'Max 30 characters')
		.required('Required'),
	pay_later: Yup.boolean(),
	pay_now: Yup.boolean(),
}).test(
	'at-least-one-service',
	'At least one service (PayLater or PayNow) must be selected',
	(values) => values.pay_later || values.pay_now
);

export default function PartnerRegister() {
	const router = useRouter();
	const { mutate, isPending, error } = useAddOnePartner();

	const formik = useFormik({
		initialValues: {
			name: '',
			company: '',
			mobile_phone: '',
			email_address: '',
			postcode: '',
			pay_later: false,
			pay_now: false,
		},
		validationSchema,
		onSubmit: (values, { setSubmitting, resetForm }) => {
			mutate(values, {
				onSuccess: () => {
					setSubmitting(false);
					resetForm();
					router.push('/interested-dealerships');
				},
				onError: () => setSubmitting(false),
			});
		},
	});

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

				<div className="flex flex-col gap-4">
					<TextInput
						name="name"
						label="Name"
						icon={faUser}
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.name && formik.errors.name}
					/>

					<TextInput
						name="company"
						label="Company"
						icon={faBuilding}
						value={formik.values.company}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.company && formik.errors.company}
					/>

					<TextInput
						name="mobile_phone"
						label="Mobile phone number"
						icon={faMobilePhone}
						value={formik.values.mobile_phone}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.mobile_phone && formik.errors.mobile_phone}
					/>

					<TextInput
						name="email_address"
						label="Email address"
						icon={faEnvelope}
						value={formik.values.email_address}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.email_address && formik.errors.email_address}
					/>

					<TextInput
						name="postcode"
						label="Postcode"
						icon={faHome}
						value={formik.values.postcode}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.postcode && formik.errors.postcode}
					/>

					<div className="flex flex-col gap-2">
						<div>
							<div className="space-x-2 text-base font-bold">
								<span><FontAwesomeIcon icon={faWrench} width={16} className="text-brand-orange" /></span>
								<span>What services are you interested in?</span>
							</div>

							<div className="text-brand-tintedgrey">Please select the services you’re interested in offering your customers</div>
						</div>

						<div className="flex flex-wrap gap-3">
							<SelectablePill
								name="pay_later"
								label="Pay Later"
								selected={formik.values.pay_later}
								onToggle={formik.setFieldValue}
							/>

							<SelectablePill
								name="pay_now"
								label="Pay Now"
								selected={formik.values.pay_now}
								onToggle={formik.setFieldValue}
							/>
						</div>
					</div>

					<Button text="Register" className="justify-center" onPress={formik.submitForm} disabled={formik.isSubmitting || isPending} />

					{typeof error === 'string' && (
						<div className="text-red-500 text-sm">{error}</div>
					)}
					{error instanceof Error && (
						<div className="text-red-500 text-sm">{error.message}</div>
					)}
				</div>

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
}
