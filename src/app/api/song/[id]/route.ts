import { Song } from "@/models/song";
import { NextApiRequest, NextApiResponse } from "next";

export const getDiscussions = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { id: song_id } = req.query;

    try {
        const song = await Song.find({ song_id }).sort({
            createdAt: -1,
        });
        console.log(`The song data the api sending is ${song}`);
        return res.status(200).json(song);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Error fetching discussion" });
    }
};