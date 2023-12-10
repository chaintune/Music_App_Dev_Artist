import { Song } from "@/models/song";
import { NextApiRequest, NextApiResponse } from "next";

export const getProjects = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const songs = res.json(await Song.find().sort({ createdAt: -1 }));

    return res.status(200).json(songs);

  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: "Error in fetching songs" });
  }
};
