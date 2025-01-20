import express from "express";
import * as businessController from "../controllers/business-controller.js";

const router =express.Router();

// router
//     .route('/')
//     .get(businessController.getAllBusinesses)
//     .get(businessController.getCategories);


// router
//     .route('/:id')
//     .get(businessController.getBusinessesByCategory);


router.get('/businesses', businessController.getAllBusinesses);
router.get('/business/:id', businessController.getBusinessDetails);
router.get('/business/:id/services', businessController.getServicesByBusiness);
router.post('/business/:id/review', businessController.addReview);
router.get('/business/:id/review', businessController.getReview);


router.get('/categories', businessController.getCategories);
router.get('/categories/:id', businessController.getBusinessesByCategory);
router.get('/services', businessController.getAllServices);

router.post('/wallet', businessController.addToWallet);
router.get('/wallet/:id', businessController.getWallet);
router.delete('/wallet/:id',businessController.deleteFromWallet);


export default router;