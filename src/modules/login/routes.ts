import express from 'express';

// Create a new router instance
const router = express.Router();
import {loginController} from './controller'

// Define a route on the router
router.get('/hello',loginController)
// Export the router as a module



export default router;