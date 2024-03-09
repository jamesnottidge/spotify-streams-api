import { getDbClient } from "../../config/client";

const db = getDbClient();

export const getArtists = async () => {
  return db.artist.findMany();
};

export const getArtistByName = async (name: string) => {
  return db.artist.findFirst({
    where: {
      name,
    },
  });
};
