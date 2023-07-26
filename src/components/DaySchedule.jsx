import React from 'react';
import Image from 'next/image';

const DaySchedule = () => {
	return (
		<section className='px-6 py-10 flex flex-col items-center gap-8 bg-stone-100'>
			<Image
				src='/time-icon.svg'
				width={50}
				height={50}
				alt='time-icon'
				className='rotate-45'
			/>
			<h2 className='mx-auto'>Таймінг дня</h2>
			<div className='max-w-[350px] flex flex-row gap-10 justify-center'>
				<div className='flex flex-col items-center w-1/2'>
					<p className='px-4 py-2 max-w-[80px] border border-black'>12:00</p>
					<div className='flex'>
						<p className='px-4 py-2 text-center'>Церемонія вінчання</p>
						<Image
							src='/church-icon.svg'
							width={45}
							height={45}
							alt='church-icon'
						/>
					</div>
				</div>
				<div className='flex flex-col items-center w-1/2'>
					<p className='px-4 py-2 max-w-[80px] border border-black'>14:00</p>
					<div className='flex'>
						<p className='px-4 py-2 text-center'>Святковий банкет</p>
						<Image
							src='/restaurant-icon.svg'
							width={45}
							height={45}
							alt='restaurant-icon'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DaySchedule;
