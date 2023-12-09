'use client'

// import CoverArt from "../../../components/CoverArt/CoverArt";
// import ReleaseType from "../../../components/ReleaseType/ReleaseType";
// import TrackDetails from "../../../components/TrackDetails/TrackDetails";
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