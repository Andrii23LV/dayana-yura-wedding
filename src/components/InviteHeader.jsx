import React from 'react';
import Calendar from '@/components/Calendar';
import { calendarArray } from '@/mock/month';

import { Caveat } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
// const calligraphyFont = Caveat({ subsets: ['cyrillic-ext'], variable: '--font-caveat' });

const InviteHeader = ({ guestsString, guestAmount, isSurname }) => {
	return (
		<section className='px-10 py-10 flex flex-col items-center justify-center gap-5 min-h-screen bg-white'>
			{isSurname ? (
				<React.Fragment>
					<h2>{guestAmount > 1 ? 'ДОРОГІ' : 'ДОРОГИЙ(-ГА)'}</h2>
					{/* 1 person type дорогий або дорога  */}
					<p
						className={`border-b-[1px] border-black w-full text-center pb-5 font-serif font-semibold text-xl`}
					>
						{guestsString}!
					</p>
				</React.Fragment>
			) : null}

			<p className='text-center mb-5'>
				ЩИРО ЗАПРОШУЄМО ВАС НА СВЯТО, ПРИСВЯЧЕНЕ СТВОРЕННЮ НАШОЇ СІМ'Ї, ЯКЕ ВІДБУДЕТЬСЯ:
			</p>
			<h2 className='mt-5 text-orange-200'>ВЕРЕСЕНЬ 2023</h2>
			<Calendar array={calendarArray} />
			<p className='text-center mt-10'>
				І ми не уявляємо цей радісний день без вас - близьких і дорогих нам людей!
			</p>
		</section>
	);
};

export default InviteHeader;
