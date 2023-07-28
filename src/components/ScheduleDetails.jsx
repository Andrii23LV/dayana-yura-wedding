import React from 'react';
import Image from 'next/image';

const ScheduleDetails = () => {
	return (
		<section className='px-10 flex flex-col items-center gap-5 bg-orange-50 p-10'>
			<div className='flex flex-col items-center'>
				<Image
					src='/ring-icon.svg'
					width={50}
					height={50}
					alt='ring-icon'
					className='rotate-45 m-5'
				/>
				<h2 className='text-center font-semibold mb-2'>ВІНЧАННЯ</h2>
				<Image
					src='/location-church.jpeg'
					width={275}
					height={45}
					alt='location-church'
					className='rounded-xl my-5'
				/>
				<p className='text-center font-light text-sm'>
					смт. Брюховичі, вул. Курортна, 6 Храм Введення в храм Пресвятої Богородиці
					о 12:00
				</p>
				<a
					className='rounded bg-orange-50 p-3 border-4 border-white mt-5 mb-5'
					href='https://www.google.com/maps/place/%D0%A5%D1%80%D0%B0%D0%BC+%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%BD%D1%8F+%D0%B2+%D1%85%D1%80%D0%B0%D0%BC+%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D1%97+%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D1%96/@49.9042872,23.9404446,17.18z/data=!4m14!1m7!3m6!1s0x473adee79593b9cd:0xf002d951205fe882!2z0JDRgNC60LDQvQ!8m2!3d49.905934!4d23.9455568!16s%2Fg%2F11cn5p382g!3m5!1s0x473adee65838ac95:0x65d26ea6045938d9!8m2!3d49.9045239!4d23.9424286!16s%2Fg%2F12hm6r6j2?entry=ttu'
				>
					дивитись на мапі
				</a>
			</div>
			<div className='flex flex-col items-center border-t-2 border-white pt-2'>
				<Image
					src='/leaf-icon.svg'
					width={50}
					height={50}
					alt='leaf-icon'
					className='rotate-45 m-5'
				/>
				<h2 className='text-center font-semibold mb-2'>БАНКЕТ</h2>
				<Image
					src='/location-restaurant.jpeg'
					width={275}
					height={300}
					alt='location-restaurant'
					className='rounded-xl my-5'
				/>
				<p className='text-center font-light text-sm'>
					смт. Брюховичі, вул. Курортна, 8А Ресторан "Аркан" о 14:00
				</p>

				<a
					className='rounded bg-orange-50 p-3 border-4 border-white mt-5'
					href='https://www.google.com/maps/place/%D0%90%D1%80%D0%BA%D0%B0%D0%BD/@49.905934,23.9455568,15z/data=!4m6!3m5!1s0x473adee79593b9cd:0xf002d951205fe882!8m2!3d49.905934!4d23.9455568!16s%2Fg%2F11cn5p382g?entry=ttu'
				>
					дивитись на мапі
				</a>
			</div>
		</section>
	);
};

export default ScheduleDetails;
