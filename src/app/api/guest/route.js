import Guest from '@/models/guest';
import { connect } from '@/utils/database';

export const GET = async (req, _res) => {
	try {
		await connect();

		const { searchParams } = new URL(req.url);

		const query = searchParams.get('surname');

		if (!query) {
			return new Response('Family name not provided in query parameters.', {
				status: 400,
			});
		}

		const guests = await Guest.find({ family: query }).populate('family');

		return new Response(JSON.stringify(guests[0]), { status: 200 });
	} catch (err) {
		console.log(err);
		return new Response('Failed to fetch: ' + err, { status: 500 });
	}
};

export const PATCH = async (req, _res) => {
	try {
		await connect();

		const { searchParams } = new URL(req.url);

		const body = await req.json();

		const query = searchParams.get('id');

		const updatedGuest = await Guest.findByIdAndUpdate(
			query,
			{ $set: body },
			{ new: true }
		).populate('family');

		if (!updatedGuest) {
			return new Response(JSON.stringify({ error: 'Guest not found' }), {
				status: 404,
			});
		}

		return new Response(JSON.stringify(updatedGuest), { status: 200 });
	} catch (err) {
		console.log(err);
		return new Response(JSON.stringify({ error: 'Failed to update: ' + err }), {
			status: 500,
		});
	}
};
