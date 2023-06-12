import { Router } from 'express';
import { EventsController } from '../controllers/events.controller.js';

const EventsRoutes = Router();

/**
 * @route GET api/events
 * @desc Get all events
 */
EventsRoutes.get('/events', EventsController.getAllEvents);

/**
 * @route GET api/events/week
 * @desc Get a Events by this week
 */
EventsRoutes.get('/events/week', EventsController.getEventsByWeek);

/**
 * @route GET api/events/month
 * @desc Get a Events by this month
 */
EventsRoutes.get('/events/month', EventsController.getEventsByMonth);

/**
 * @route GET api/events/year
 * @desc Get  a Events by year
 */
EventsRoutes.get('/events/year', EventsController.getEventsByYear);


export default EventsRoutes;
