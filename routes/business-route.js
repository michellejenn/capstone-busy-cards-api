import express from "express";
import * as businessController from "../controllers/business-controller.js";

const router =express.Router();

router
    .route('/')
    .get(businessController.getAllBusinesses);


router
    .route('/:id')
    .get(businessController.getBusinessesByCategory);

export default router;