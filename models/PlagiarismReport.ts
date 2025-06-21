import mongoose from "mongoose";

const plagiarismReportSchema = new mongoose.Schema({
    documentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
        required: true,
        index: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    plagiarismScore: {
        type: Number, // A percentage from 0 to 100
        min: 0,
        max: 100
    },
    originalityScore: {
        type: Number, // A percentage from 0 to 100
        min: 0,
        max: 100
    },
    matchedSources: [{
        url: { type: String, required: true },
        citation: { type: String }, // Auto-generated citation
        matchPercentage: { type: Number, required: true }
    }],
    // Store the content with plagiarism highlighted, perhaps as HTML or JSON
    highlightedContent: {
        type: String
    },
    // Store the raw response from the third-party API for debugging
    rawApiResponse: {
        type: mongoose.Schema.Types.Mixed
    }
}, {
    timestamps: true
});

export default mongoose.models.PlagiarismReport || mongoose.model('PlagiarismReport', plagiarismReportSchema);
