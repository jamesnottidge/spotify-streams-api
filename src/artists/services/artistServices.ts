import { getArtistByName } from "../repositories";

export const getArtistDataService = async (name: string) => {
  const artist = await getArtistByName(name);
  if (artist) {
    return artist;
  }
  return null;
};

// do i have him in my database?
// go and fetch his shit from spotify
// populate my db with his shit
// his shit is:
// his name
// his genres
// his images
// his id
