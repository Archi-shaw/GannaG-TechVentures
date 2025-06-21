import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        default: 'Untitled Document'
    },
    content: {
        type: String, // Can store plain text, HTML, or Markdown.
        default: ''
    },
    documentType: {
        type: String,
        enum: [
            'blog_post', 'article', 'product_description', 'ad_copy', 
            'email', 'social_media_caption', 'story', 'script'
        ],
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'completed', 'archived'],
        default: 'draft'
    },
    language: {
        type: String,
        default: 'en'
    },
    wordCount: {
        type: Number,
        default: 0
    },
    // Store original generation parameters for reference or re-generation
    generationMetadata: {
        tone: String,
        keywords: [String],
        audience: String,
    },
     source: {
        type: String,
        enum: ['editor', 'pasted_text', 'api_upload'],
        default: 'editor',
        required: true
    },
    tags: {
        type: [String],
        default: []
    }
}, {
    timestamps: true // Adds createdAt and updatedAt automatically
});

export default mongoose.models.Document || mongoose.model('Document', documentSchema);
