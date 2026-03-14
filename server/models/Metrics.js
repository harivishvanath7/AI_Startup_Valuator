const mongoose = require("mongoose");

const metricsSchema = new mongoose.Schema(
    {
        startupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Startup",
            required: true
        },
        monthlyRevenue: {
            type: Number,
            default: 0
        },
        growthRate: {
            type: Number,
            default: 0
        },
        customerCount: {
            type: Number,
            default: 0
        },
        burnRate: {
            type: Number,
            default: 0
        },
        marketSize: {
            type: Number,
            default: 0
        },
        CAC: {
            type: Number,
            default: 0
        },
        LTV: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const Metrics = mongoose.model("Metrics", metricsSchema);

module.exports = Metrics;
