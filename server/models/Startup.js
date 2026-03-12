import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        industry: {
            type: String,
        },
        founder: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        stage: {
            type: String,
            enum: ["idea", "mvp", "early", "growth", "scale"]
        },
        foundedYear: {
            type: Number
        },
    }, 
    { timestamps: true }
);

const Startup = mongoose.Model("Startup", startupSchema);

module.exports = Startup;