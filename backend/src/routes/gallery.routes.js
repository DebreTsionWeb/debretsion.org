import { Router } from 'express';
import { GalleryController } from '../controllers/gallery.controller.js';

const GalleryRoutes = Router();

/**
 * @route GET api/gallery
 * @desc Get all gallery
 */
GalleryRoutes.get('/gallery', GalleryController.getAllGallery);

/**
 * @route GET api/gallery/week
 * @desc Get a gallery by this week
 */
GalleryRoutes.get('/gallery/week', GalleryController.getGalleryByWeek);

/**
 * @route GET api/gallery/month
 * @desc Get a gallery by this month
 */
GalleryRoutes.get('/gallery/month', GalleryController.getGalleryByMonth);

/**
 * @route GET api/gallery/year
 * @desc Get  a gallery by year
 */
GalleryRoutes.get('/gallery/year', GalleryController.getGalleryByYear);


export default GalleryRoutes;
