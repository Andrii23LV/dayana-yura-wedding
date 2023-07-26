import React from 'react';
import Image from 'next/image';

const Warning = () => {
	return (
		<section className='p-5 bg-yellow-50 flex justify-center'>
			<div className='rounded-full border-2 p-8 h-52 border-lime-700 max-w-[420px]'>
				<Image
					src='/bouquet.svg'
					width={50}
					height={50}
					alt='bouquet-icon'
					className='m-auto mb-2 rotate-45'
				/>
				<p className='text-center text-green-600 font-light'>
					Просимо не дарувати нам квіти, на святкуванні буде скринька для ЗСУ, краще
					спрямуйте ці кошти на благодійність.
				</p>
			</div>
		</section>
	);
};

export default Warning;
