import express from "express";
import * as categoryController from "../controllers/category-controller.js";

const router =express.Router();

router
    .route('/')
    .get(categoryController.getCategories);

export default router;