import { Album } from "@/models/album";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  
  try {
    const albums = await Album.find({})
      .populate("songs")
      .populate("artists")
      .exec();

    if (!albums) {
      return res.status(404).json({ success: false, error: "Album not found" });
    }

    res.status(200).json({ success: true, data: albums });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
};
