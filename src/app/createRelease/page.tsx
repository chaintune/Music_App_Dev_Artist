'use client'

// import CoverArt from "../../../components/CoverArt/CoverArt";
// import ReleaseType from "../../../components/ReleaseType/ReleaseType";
// import TrackDetails from "../../../components/TrackDetails/TrackDetails";
import { Layout, CoverArt, ReleaseOptions, TrackDetails } from "@/components";
import React, { useState } from 'react';
import {Container, Item, Icon} from "../../../styles/ReleaseOptions/style"
import disc from '../../../assets/disc.svg'
import folder from '../../../assets/folder.svg'
  
  
const CreateRelease = () => {
    const [selected, setSelected] = useState('single');
    return ( 

        <Layout>
            <Container>
                <div style={{padding:'2vh'}}>

                    <div style={{fontFamily: 'Aileron',fontSize: '2vw',fontWeight: '300',color:'white'}}>Type</div>
                    <div style={{display:'flex'}}>
                    <ReleaseOptions
                    label="Single"
                    isSelected={selected === 'single'}
                    onClick={() => setSelected('single')}
                    iconSrc={disc}
                    />
                    <ReleaseOptions
                    label="Album"
                    isSelected={selected === 'album'}
                    onClick={() => setSelected('album')}
                    iconSrc={folder}
                    />
                    </div>
                </div>
            </Container>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                {/* <CoverArt /> */}
                </div>
                {(selected=="single")?(<TrackDetails selected="single" />):(<TrackDetails selected="album" />) }
                
                {/* <LaunchNFT /> */}

        </Layout>
     );
}
 
export default CreateRelease;