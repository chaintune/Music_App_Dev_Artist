import mongooseconnect from "@/lib/mongoose";
import { Artist } from "@/models/artist";

export const POST = async (req: Request) => {
  const { name, desc, walletAddress } = await req.json();

  try {
    await mongooseconnect();

    if (!name || !desc || !walletAddress) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 400,
          statusText: "Error",
        }
      );
    }

    const artist = await Artist.create({
      name,
      // image,
      desc,
      walletAddress,
      // date,
      albums: [],
      // community,
      earnings: 0,
      plays: 0,
    });
    console.log(`The artist data the api sending is ${artist}`);
    return new Response(JSON.stringify(artist), {
      status: 200,
      statusText: "Success",
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Error fetching artist" }), {
      status: 400,
      statusText: "Error",
    });
  }
};
