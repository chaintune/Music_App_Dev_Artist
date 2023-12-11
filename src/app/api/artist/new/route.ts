import { Artist } from "@/models/artist";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        name,
        // image,
        desc,
        walletAddress,
    } = req.body;
    
    try {
        const artist = await Artist.create({
        name,
        // image,
        desc,
        walletAddress,
        // date,
        albums: [],
        // community,
        earnings : 0,
        plays : 0
        });
        console.log(`The artist data the api sending is ${artist}`);
        return res.status(200).json(artist);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Error creating artist" });
    }
    }