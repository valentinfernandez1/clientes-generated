import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({

	name: {
		type: String,
		required: true,
		unique: false
	},
	lastName: {
		type: String,
		required: true,
		unique: false
	},
	birthDate: {
		type: Date,
		required: true,
		unique: false
	},
	personAddress: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		ref: "Address"
	},

    subscriptionDate: {
		type: Date,
		required: true,
		unique: true
	},
    rentedBook: {
		type: String,
		required: true,
	},
});

export default mongoose.model("Client", ClientSchema);

