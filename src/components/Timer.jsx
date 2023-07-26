'use client';

import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Timer = ({ targetDate }) => {
	const calculateRemainingTime = () => {
		const endDate = moment(targetDate);
		const duration = moment.duration(endDate.diff(moment()));

		const days = Math.floor(duration.asDays());
		const hours = duration.hours();
		const minutes = duration.minutes();
		const seconds = duration.seconds();

		return { days, hours, minutes, seconds };
	};

	const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setRemainingTime(calculateRemainingTime());
		}, 1100);

		return () => {
			clearInterval(timerInterval);
		};
	}, []);

	return (
		<section className='bg-[url("/flowers-1.jpg")] bg-cover bg-center w-full'>
			<div className='py-10 w-full flex flex-col justify-center items-center backdrop-brightness-75 backdrop-blur-sm text-white'>
				<div className='flex flex-row justify-center gap-4'>
					<div className='flex flex-col items-center w-[60px]'>
						<p className='text-5xl font-bold drop-shadow-md font-serif'>
							{remainingTime.days}
						</p>
						<div className='border-l my-2 mt-3 h-5 border-lime-100'></div>
						<p>днів</p>
					</div>
					<div className='pt-2 text-xl font-semibold'>:</div>
					<div className='flex flex-col items-center w-[60px]'>
						<p className='text-5xl font-bold drop-shadow-md font-serif'>
							{remainingTime.hours}
						</p>
						<div className='border-l my-2 mt-3 h-5 border-lime-100'></div>
						<p>годин</p>
					</div>
					<div className='pt-2 text-xl font-semibold'>:</div>
					<div className='flex flex-col items-center w-[60px]'>
						<p className='text-5xl font-bold drop-shadow-md font-serif'>
							{remainingTime.minutes}
						</p>
						<div className='border-l my-2 mt-3 h-5 border-lime-100'></div>
						<p>хвилин</p>
					</div>
					<div className='pt-2 text-xl font-semibold'>:</div>
					<div className='flex flex-col items-center w-[60px]'>
						<p
							className='text-5xl font-bold drop-shadow-md font-serif'
							suppressHydrationWarning
						>
							{remainingTime.seconds}
						</p>
						<div className='border-l my-2 mt-3 h-5 border-lime-100'></div>
						<p>секунд</p>
					</div>
				</div>
				<p className='p-7 pb-0 text-center font-serif font-semibold text-xl'>
					...і ми будемо одружені!
				</p>
			</div>
		</section>
	);
};

export default Timer;
