import { Request, Response, NextFunction } from "express";
import { getArtistDataService } from "../services";

export const getArtistData = async (req: Request, res: Response) => {
  try {
    const name = req.params.artistName;
    console.log(name);
    const artistData = await getArtistDataService(name);

    if (artistData) {
      res.status(200).json({ message: "Artist found!", data: artistData });
    } else {
      res.status(200).json({ message: "Artist not found oh!", data: null });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// do i have him in my database?
// go and fetch his shit from spotify
// populate my db with his shit
// his shit is:
// his name
// his genres
// his images
// his id
