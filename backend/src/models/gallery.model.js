import mongoose from 'mongoose';

/**
 * Gallery Schema for MongoDB
 */
const GallerySchema = new mongoose.Schema({
    Image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
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
