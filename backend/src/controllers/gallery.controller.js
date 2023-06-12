import mongoose from 'mongoose';
import Gallery from '../models/gallery.model.js';

export class GalleryController {
    /**
     * Gets all Gallery
     *
    * @param {Request} req request object
    * @param {Response} res response object
    * @returns {Gallery[]} Gallery object
    * @returns {Error} error object
     */
    static async getAllGallery (req, res) {
        try {
            const Gallery = await Gallery.find();
            res.status(200).json(Gallery);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
  }
