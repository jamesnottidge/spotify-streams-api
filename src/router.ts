import { Router } from "express";
import artistRouter from "./artists/artistRouter";

const router = Router();

router.get("/", (req, res) => { 
    res.send("Hello Mineta!");
});

router.use("/artists", artistRouter);

export default router;