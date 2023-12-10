import { Song } from "@/models/song";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body : data } = req;
    const { name ,image, animation_url, attributes, properties } = data;

    try {
        const newSong = new Song({
            name,
            image,
            animation_url,
            attributes,
            properties,
          });

          const createdSong = await newSong.save();
          res.status(201).json(createdSong);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message : "Failed to upload song" });
    }
}