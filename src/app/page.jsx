'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import '../styles/globals.css';

import DaySchedule from '@/components/DaySchedule';
import Timer from '@/components/Timer';
import ScheduleDetails from '@/components/ScheduleDetails';
import FormComponent from '@/components/FormComponent';
import InviteHeader from '@/components/InviteHeader';
// import DressCode from '@/components/DressCode';
import Warning from '@/components/Warning';

export default function Home() {
	const targetDate = '2023-09-09T12:00:00';

	const searchParams = useSearchParams();

	const surname = searchParams.get('surname');

	const [formData, setFormData] = useState({
		family: null,
		list: [],
		children: {
			sitWithParents: false,
		},
		hotelNeeded: false,
	});

	const [guestsString, setGuestsString] = useState();

	const [guestAmount, setGuestAmount] = useState();

	const [someone, setSomeone] = useState('');

	const updateGuestData = async (data) => {
		try {
			const fetchString = `/api/guest?id=${formData._id}`;
			await fetch(fetchString, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
		} catch (error) {
			console.error('Failed to update guest data:', error);
		}
	};

	const handlePresentChange = async (index, isPresent) => {
		const updatedList = [...formData.list];
		updatedList[index].present = isPresent;
		setFormData({ ...formData, list: updatedList });

		await updateGuestData({ ...formData, list: updatedList });
	};

	const handleSomeOnePresentChange = async (isPresent) => {
		const updatedList = formData.list.map((item) => {
			if (item.name === 'Someone') {
				return { ...item, present: isPresent };
			}
			return item;
		});

		setFormData({ ...formData, list: updatedList });

		await updateGuestData({ ...formData, list: updatedList });
	};

	const handleChildrenSitChange = async (isSitWithParents) => {
		setFormData({
			...formData,
			children: { ...formData.children, sitWithParents: isSitWithParents },
		});

		await updateGuestData({
			...formData,
			children: { ...formData.children, sitWithParents: isSitWithParents },
		});
	};

	const handleHotelNeededChange = async (isHotelNeeded) => {
		setFormData({ ...formData, hotelNeeded: isHotelNeeded });

		await updateGuestData({ ...formData, hotelNeeded: isHotelNeeded });
	};

	const handleChangeValue = (e) => {
		const value = e.target.value;
		setSomeone(value);
	};

	const handleSubmitValue = async (e) => {
		e.preventDefault();

		try {
			const fetchString = `/api/guest?id=${formData._id}`;
			await fetch(fetchString, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ ...formData, comment: someone }),
			});
		} catch (error) {
			console.error('Failed to update guest data:', error);
		}
	};

	useEffect(() => {
		const fetchGuest = async () => {
			if (surname) {
				const fetchString = `/api/guest?surname=${surname}`;
				try {
					const response = await fetch(fetchString);
					const data = await response.json();

					setFormData(data);

					const amount = data.list.filter(
						(guest) => guest.name !== 'Someone'
					).length;

					const listString = data.list
						.filter((guest) => guest.name !== 'Someone')
						.map((guest) => guest.name)
						.join(', ');

					const comment = data.comment;

					setGuestAmount(amount);
					setGuestsString(listString);
					setSomeone(comment);
				} catch (error) {
					console.error('Failed to fetch guest data:', error);
				}
			}
		};

		fetchGuest();
	}, [surname]);

	return (
		<main>
			<section className='flex justify-center'>
				<div className='h-screen max-h-[700px] max-w-[414px] w-full bg-[url("/static/couple.png")] bg-cover bg-center'></div>
			</section>
			<InviteHeader
				guestsString={guestsString}
				guestAmount={guestAmount}
				isSurname={formData.list.length}
			/>
			<ScheduleDetails />
			{formData.list.length ? (
				<FormComponent
					formData={formData}
					someone={someone}
					handleChangeValue={handleChangeValue}
					onSubmit={handleSubmitValue}
					onPresentChange={handlePresentChange}
					onSomeOnePresentChange={handleSomeOnePresentChange}
					onChildrenSitChange={handleChildrenSitChange}
					onHotelNeededChange={handleHotelNeededChange}
				/>
			) : null}
			<DaySchedule />
			<Timer targetDate={targetDate} />
			{/* <DressCode /> */}
			<Warning />
		</main>
	);
}
