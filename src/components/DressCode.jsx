import React from 'react';
import Image from 'next/image';

const DressCode = () => {
	return (
		<section className='flex justify-center flex-col p-10 gap-5 text-white bg-gray-300'>
			<Image
				src='/leaf-icon.svg'
				width={50}
				height={50}
				alt='leaf-icon'
				className='rotate-45 m-auto'
			/>
			<p className='text-center'>
				БУДЕМО ВДЯЧНІ, ЯКЩО ВИ ПІДТРИМАЄТЕ КОЛЬОРОВУ ГАМУ НАШОГО СВЯТА
			</p>
			<div className='flex flex-row gap-4 justify-center'>
				<div className='w-10 h-10 rounded-full bg-[#c8c8c8] border-2 border-slate-100'></div>
				<div className='w-10 h-10 rounded-full bg-[#e6d8bc] border-2 border-slate-100'></div>
				<div className='w-10 h-10 rounded-full bg-[#c9a590] border-2 border-slate-100'></div>
				<div className='w-10 h-10 rounded-full bg-[#936d55] border-2 border-slate-100'></div>
				<div className='w-10 h-10 rounded-full bg-[#6d634a] border-2 border-slate-100'></div>
			</div>
			<Image
				src='/leaf-icon.svg'
				width={50}
				height={50}
				alt='leaf-icon'
				className='rotate-[215deg] m-auto'
			/>
		</section>
	);
};

export default DressCode;
