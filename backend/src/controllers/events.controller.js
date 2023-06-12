import mongoose from 'mongoose';
import Events from '../models/events.model.js';

export class EventsController {
    /**
     * Gets all Events
     *
    * @param {Request} req request object
    * @param {Response} res response object
    * @returns {Events[]} Events object
    * @returns {Error} error object
     */
    static async getAllEvents (req, res) {
        try {
            const Events = await Events.find();
            res.status(200).json(Events);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
  }
