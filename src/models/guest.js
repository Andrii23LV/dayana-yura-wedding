import { Schema, model, models } from 'mongoose';

const GuestSchema = new Schema({
	family: {
		type: String,
	},
	list: [
		{
			name: {
				type: String,
				default: null,
			},
			present: {
				type: Boolean,
				default: null,
			},
			age: {
				type: String,
				default: null,
			},
			_id: {
				type: String,
				default: null,
			},
		},
	],
	children: {
		isPresent: {
			type: Boolean,
			default: null,
		},
		sitWithParents: {
			type: Boolean,
			default: false,
		},
	},
	hotelNeeded: {
		type: Boolean,
		default: null,
	},
	askAboutHotel: {
		type: Boolean,
		default: null,
	},
	comment: {
		type: String,
		default: '',
	},
});

const Guest = models.Guest || model('Guest', GuestSchema);

export default Guest;
