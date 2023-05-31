import mongoose from 'mongoose';

/**
 * Appointment Schema for MongoDB
 */
const AppointmentSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    reason: {
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


export default mongoose.model('Appointment', AppointmentSchema);
