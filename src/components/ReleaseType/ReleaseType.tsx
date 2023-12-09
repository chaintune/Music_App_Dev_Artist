
import React, { useState } from 'react';
import {Container, Item, Icon} from "../../../styles/ReleaseType/style"
import disc from '../../../assets/disc.svg'
import folder from '../../../assets/folder.svg'

// Component for the icon and label
const Option = ({ label, isSelected, onClick, iconSrc }) => {
    return (
      <Item isSelected={isSelected} onClick={onClick}>
        <Icon src={iconSrc.src} isSelected={isSelected} />
        {label}
      </Item>
    );
  };
  
  // Main component
  const ReleaseType: React.FC = () => {
    const [selected, setSelected] = useState('single');
  
    return (
      <Container>
        <div style={{padding:'2vh'}}>

            <div style={{fontFamily: 'Aileron',fontSize: '2vw',fontWeight: '300',color:'white'}}>Type</div>
            <div style={{display:'flex'}}>
            <Option
            label="Single"
            isSelected={selected === 'single'}
            onClick={() => setSelected('single')}
            iconSrc={disc} // Path to your disc image in the assets folder
            />
            <Option
            label="Album"
            isSelected={selected === 'album'}
            onClick={() => setSelected('album')}
            iconSrc={folder} // Path to your folder image in the assets folder
            />
            </div>
        </div>
      </Container>
    );
  };
  
  export default ReleaseType;