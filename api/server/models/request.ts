// requirements
import mongoose, { Schema } from "mongoose";

const requestSchema = new Schema({
    request: {
        type: String,
        required: [true, "Please enter request."],
    },
    quantity: {
        type: Number,
        default: 1,
    },
});

export const Request = mongoose.model("Request", requestSchema);

const userRequestSchema = new Schema(
    {
        requests: [
            {
                type: Schema.Types.ObjectId,
                ref: "Request",
                default: null,
            },
        ],
        userID: {
            type: Schema.Types.ObjectId,
            ref: "UserCredentials",
            default: null,
        },
        paid: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);
export const UserRequest = mongoose.model("UserRequest", userRequestSchema);
