import { Router } from "express";
import { ArticleController } from "../controllers/articles.controllers";
import { auth } from "../middlewares/auth.middleware";

const router = Router();

router.get("/articles", auth, ArticleController.getByFilters);

export default router;
