import mongoose from "mongoose";

const documentVersionSchema = new mongoose.Schema({
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
    content: {
        type: String,
        required: true
    },
    versionNumber: {
        type: Number,
        required: true
    },
    // A brief note on what changed in this version
    changeSummary: {
        type: String
    }
}, {
    timestamps: { createdAt: true, updatedAt: false } // Only need createdAt for versions
});

documentVersionSchema.index({ documentId: 1, versionNumber: -1 });

export default mongoose.models.DocumentVersion || mongoose.model('DocumentVersion', documentVersionSchema);
