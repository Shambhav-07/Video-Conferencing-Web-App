import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        user_id: {type: String},
        meetingCode: {type: String, required: true},
        date: { type: Date, default: Date.now, required: true}
    }
)

const User = mongoose.model("Meeting",mettingSchema);

export { Meeting };