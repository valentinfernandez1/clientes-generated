import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({


    address: {
		type: String,
		required: true,
		unique: true
	},
    number: {
		type: Integer,
		required: true,
		unique: true
	},
    city: {
		type: String,
		required: true,
		unique: true
	},
	addressCity: {
		type: mongoose.Schema.Types.ObjectId ,
		required: true,
		ref: "City"
	},
    bookAddress: {
		type: String,
		required: false,
	},
});

export default mongoose.model("Address", AddressSchema);

