const FormComponent = ({
	formData,
	someone,
	handleChangeValue,
	onSubmit,
	onPresentChange,
	onChildrenSitChange,
	onHotelNeededChange,
}) => {
	const someOne = formData.list.some((item) => item.name === 'Someone');
	const moreThanOneChild = formData.list.filter((item) => item.age === 'child').length > 1;

	return (
		<div className='flex flex-col items-center gap-5 p-10'>
			<p className='text-center pb-5'>
				ЧИ ЗМОЖЕТЕ ВИ ПРИЄДНАТИСЬ ДО СВЯТКУВАННЯ РАЗОМ З НАМИ?
			</p>
			{formData.list
				.filter((guest) => guest.name !== 'Someone')
				.map((item, index) => (
					<div
						key={index}
						className='flex flex-row gap-5 justify-center w-full items-center'
					>
						<p className='w-1/2 max-w-[250px] font-serif font-semibold'>
							{item.name}
						</p>
						<div className='w-[160px] flex justify-evenly'>
							<button
								onClick={() => onPresentChange(index, true)}
								className={`px-5 h-10 rounded-md ${
									item.present
										? 'border border-green-500'
										: 'bg-green-100 text-green-800'
								}`}
							>
								Так
							</button>
							<button
								onClick={() => onPresentChange(index, false)}
								className={`px-5 h-10 rounded-md ${
									!item.present ? 'border border-red-500' : 'border'
								}`}
							>
								Ні
							</button>
						</div>
					</div>
				))}

			{formData.children.isPresent && (
				<div className='flex flex-row gap-5 justify-center w-full items-center'>
					<p className='w-1/2 max-w-[250px]'>
						Діти сидітимуть з Вами за одном столом?
					</p>
					<div className='w-[160px] flex justify-evenly'>
						<button
							onClick={() => onChildrenSitChange(true)}
							className={`px-5 h-10 rounded-md ${
								formData.children.sitWithParents
									? 'border border-green-500'
									: 'bg-green-100 text-green-800'
							}`}
						>
							Так
						</button>
						<button
							onClick={() => onChildrenSitChange(false)}
							className={`px-5 h-10 rounded-md ${
								!formData.children.sitWithParents
									? 'border border-red-500'
									: 'border'
							}`}
						>
							Ні
						</button>
					</div>
				</div>
			)}

			{formData.askAboutHotel && (
				<div className='flex flex-row gap-5 justify-center w-full items-center'>
					<p className='w-1/2 max-w-[250px]'>Чи потрібне Вам проживання?</p>
					<div className='w-[160px] flex justify-evenly'>
						<button
							onClick={() => onHotelNeededChange(true)}
							className={`px-5 h-10 rounded-md ${
								formData.hotelNeeded
									? 'border border-green-500'
									: 'bg-green-100 text-green-800'
							}`}
						>
							Так
						</button>
						<button
							onClick={() => onHotelNeededChange(false)}
							className={`px-5 h-10 rounded-md ${
								!formData.hotelNeeded ? 'border border-red-500' : 'border'
							}`}
						>
							Ні
						</button>
					</div>
				</div>
			)}
			{someOne ? (
				<div className='flex flex-col gap-5 justify-center w-full items-center'>
					<div className='flex flex-row gap-5 justify-center w-full items-center'>
						<p className='w-1/2 max-w-[250px]'>Ваш "+1"?</p>
						<div className='w-[160px] flex justify-evenly'>
							<button
								onClick={() => onHotelNeededChange(true)}
								className={`px-5 h-10 rounded-md ${
									formData.hotelNeeded
										? 'border border-green-500'
										: 'bg-green-100 text-green-800'
								}`}
							>
								Так
							</button>
							<button
								onClick={() => onHotelNeededChange(false)}
								className={`px-5 h-10 rounded-md ${
									!formData.hotelNeeded
										? 'border border-red-500'
										: 'border'
								}`}
							>
								Ні
							</button>
						</div>
					</div>
					<form className='flex flex-col'>
						<input
							className='w-[350px] px-5 py-2 border-b-2 text-sm'
							type='text'
							value={someone}
							onChange={(e) => handleChangeValue(e)}
							placeholder='Вкажіть імʼя та прізвище Вашого "+1"'
						></input>
						<button
							type='submit'
							onClick={(e) => onSubmit(e)}
							className='mt-5 border border-green-200 bg-green-50 px-5 h-10 rounded-md w-[200px] m-auto'
						>
							Зберегти відповідь
						</button>
					</form>
				</div>
			) : null}
			{moreThanOneChild ? (
				<form className='flex flex-col'>
					<input
						className='w-[350px] px-2 py-2 border-b-2 text-xs'
						type='text'
						value={someone}
						onChange={(e) => handleChangeValue(e)}
						placeholder='Вкажіть побажання, щодо розташування за столом'
					></input>
					<button
						type='submit'
						onClick={(e) => onSubmit(e)}
						className='mt-5 border border-green-200 bg-green-50 px-5 h-10 rounded-md w-[200px] m-auto'
					>
						Зберегти відповідь
					</button>
				</form>
			) : null}
			<p className='text-gray-400 italic font-thin text-sm'>
				Прохання повідомити про присутність до 31-го серпня 2023 року
			</p>
		</div>
	);
};

export default FormComponent;
