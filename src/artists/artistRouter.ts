import { Router } from "express";
import { getArtistData } from "./handlers";

const artistRouter = Router();

artistRouter.get("/", (req, res) => { 
    res.send("Hello Mineta the artist!");
});


artistRouter.get("/:artistName", getArtistData);


export default artistRouter;