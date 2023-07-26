import React from 'react';
import Image from 'next/image';

const Calendar = ({ array }) => {
	const weeks = Math.ceil(array.length / 7);
	const rows = Array.from({ length: weeks }, (_, weekIndex) =>
		array.slice(weekIndex * 7, (weekIndex + 1) * 7)
	);

	const weedingDay = 9;

	return (
		<div className='grid gap-1 max-w-xs w-full p-3'>
			{rows.map((row, rowIndex) => (
				<div key={rowIndex} className='grid grid-cols-7 gap-1'>
					{row.map((item, colIndex) =>
						item === weedingDay ? (
							<span key={colIndex} className='relative py-2 text-center'>
								{item}
								<Image
									src='/love-icon.svg'
									width={50}
									height={50}
									alt='love-icon'
									className='absolute inset-0 z-10'
								/>
							</span>
						) : (
							<span key={colIndex} className='py-2 text-center'>
								{item}
							</span>
						)
					)}
				</div>
			))}
		</div>
	);
};

export default Calendar;
