import { Album } from "@/models/album";
import { Artist } from "@/models/artist";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, image, external_url, desc, creator, songs, artists, date, properties , walletAddress} = req.body;
    
    try {
        const album = await Album.create({
            name,
            image,
            external_url,
            desc,
            creator,
            songs,
            artists,
            date,
            properties
        })

        const artist = await Artist.findOneAndUpdate(
            { walletAddress: walletAddress },
            { $push: { albums: album._id } },
            { new: true }
        );

        if (!artist) {
            return res.status(404).json({ success: false, error: 'Artist not found' });
        }

        res.status(200).json({ success: true, data: album })
    } catch (error) {
        res.status(400).json({ success: false, error: error })
    }
}
