import mongoose from 'mongoose';

/**
 * Appointment Schema for MongoDB
 */
const AppointmentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        ref: 'Date',
        required: true,
    },
    time: {
        type: String,
        ref: 'Time',
        required: true,
    },
    reason: {
        type: String,
        required: false,
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
