import mongoose from 'mongoose';

let isConnected = false;

export const connect = async () => {
	mongoose.set('strictQuery', true);

	try {
		const connection = await mongoose.connect(process.env.MONGODB_URI, {
			dbName: process.env.MONGODB_NAME,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		isConnected = true;

	} catch (error) {
		console.log(error);
	}
};
