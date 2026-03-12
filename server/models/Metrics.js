const mongoose = require("mongoose");

const metricsSchema = new mongoose.Schema(
    {
        startupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Startup",
            required: true
        },
        revenue: {
            type: Number,
            default: 0
        },
        growthRate: {
            type: Number
        },
        customerCount: {
            type: Number
        },
        burnRate: {
            type: Number
        },
        marketSize: {
            type: Number
        }
    },
    { timestamps: true }
);

const Metrics = mongoose.model("Metrics", metricsSchema);

module.exports = Metrics;
