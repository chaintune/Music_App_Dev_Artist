import { Album } from "@/models/album";
import { NextApiRequest, NextApiResponse } from "next";

export const GET  = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    try {
        const album = await Album.findById(id).populate('songs').exec();

        if (!album) {
            return res.status(404).json({ success: false, error: 'Album not found' });
        }

        res.status(200).json({ success: true, data: album })
    } catch (error) {
        res.status(400).json({ success: false, error: error })
    }
}