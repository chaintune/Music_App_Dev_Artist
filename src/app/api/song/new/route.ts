import { Song } from "@/models/song";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body : data } = req;
    const { name ,image, animation_url, genre, artist } = data;
    // const image : File | null = data.get('image');

    try {
        const newSong = new Song({
            name: name,
            image: "",
            animation_url: animation_url,
            attributes: [
                {
                    trait_type: "Genre",
                    value: genre
                },
                {
                    trait_type: "Artist",
                    value: artist
                },
                {
                    trait_type: "Posting Date",
                    value: ""
                },
                {
                    trait_type: "License",
                    value: "MIT"
                }
            ],
            properties: {
                files: [
                    {
                        type: "audio/mp3",
                        uri: animation_url
                    },
                    {
                        type: "image/png",
                        uri: image
                    }
                ],
                category: "audio"
            }
        })

          const createdSong = await newSong.save();
          res.status(201).json(createdSong);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message : "Failed to upload song" });
    }
}