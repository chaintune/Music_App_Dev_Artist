import { NextApiRequest, NextApiResponse } from "next"

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    
    try{
         
    }
    catch(err){
        console.log(err)
        return Response.json({error: "Something went wrong"},{status: 500})
    }

}