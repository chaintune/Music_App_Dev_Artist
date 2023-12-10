'use client'
import { Layout, CoverArt, ReleaseType, TrackDetails } from "@/components";

const CreateRelease = () => {
    return ( 
        <Layout>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <ReleaseType/>
                <CoverArt />
                </div>
                <TrackDetails />

        </Layout>
     );
}
 
export default CreateRelease;