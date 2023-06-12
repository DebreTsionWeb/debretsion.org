import mongoose from 'mongoose';

/**
 * Gallery Schema for MongoDB
 */
const GallerySchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    adminuser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AdminUser',
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
