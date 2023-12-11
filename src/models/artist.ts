import { Schema, model, models } from "mongoose"

const artistSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    desc: {
        type: String,
    },
    walletAddress: {
        type: String,
    },
    date: {
        type: String,
    },
    albums: [String],
    community: {
        type: String
    },
    earnings: {
        type: Number
    },
    plays: {
        type: Number
    }
})

export const Artist = models.Artist || model("Artist", artistSchema)