const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        industry: {
            type: String,
        },
        founderId: {
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

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;
