import mongoose from 'mongoose';

/**
 * Gallery Schema for MongoDB
 */
const GallerySchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Gallery', GallerySchema);
