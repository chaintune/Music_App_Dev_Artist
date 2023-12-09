import React, { useCallback, useState } from 'react';
import {Container, Form,InputGroupColumn, Input, InputGroup, Label, Select, Button, ToggleSwitch, Slider, Checkbox} from "../../../styles/TrackDetails/style"
import {DropArea, Instructions, FileInput} from "../../../styles/CoverArt/style"
import upload from '../../../assets/upload.svg'
import Image from 'next/image'

const TrackDetails: React.FC = () => {
    const [trackName, setTrackName] = useState('');
    // Add states for other form fields as needed
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Handle the form submission
    };
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];
          // Handle the file upload...
        }
      };

      const onClick = useCallback(() => {
        const fileInput = document.getElementById('fileInput');
        fileInput?.click();
      }, []);
  
    return (
      <Container>
        <div style={{fontFamily: 'Aileron',fontSize: '2vw',fontWeight: '300',color:'white'}}>Track Details</div>
        <Form onSubmit={handleSubmit}>
        <InputGroupColumn style={{gridTemplateColumns:'1fr 2fr'}}>
        
          <InputGroup>
            <Label>Upload Track</Label>
            <DropArea
                // isDragActive={isDragActive}
                // onDragOver={onDragOver}
                // onDragLeave={onDragLeave}
                // onDrop={onDrop}
                onClick={onClick}
            >
                <FileInput
                type="file"
                id="fileInput"
                accept=".png,.jpg,.jpeg"
                onChange={onFileChange}
                />
                <Image src={upload} alt="" style={{width: '5vw', height: '5vw'}}/>
                <Instructions>
                    
                    <span style={{fontSize:'2.2vh'}}>Browse File or Drag and drop the file here</span>
                    <br />
                    <span style={{opacity:0.6}}>.mp3, .wav, .aac files upto 50mb are supported. ChainTune recommends 256 kbps or more for best quality.</span>
                </Instructions>
            </DropArea>
          </InputGroup>
          <div>
          <InputGroup>

            <Label htmlFor="trackName">Name</Label>
            <Input
              id="trackName"
              type="text"
              value={trackName}
              onChange={e => setTrackName(e.target.value)}
              placeholder="Enter track name..."
            />
            </InputGroup>
            <InputGroupColumn>
                <InputGroup>
                    <Label htmlFor="trackName">Primary Genre</Label>
                    <Select
                    id="primaryGenre"
                    />
                    <Label htmlFor="trackName">Primary Language</Label>
                    <Select
                    id="primaryLanguage"
                    />
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="trackName">Secondary Genre</Label>
                    <Select
                    id="secondaryGenre"
                    />
                    <Label htmlFor="trackName">Featured Artists (if any)</Label>
                    <Select
                    id="artists"
                    />
                </InputGroup>
            </InputGroupColumn>
            </div>
        </InputGroupColumn>
        <InputGroupColumn>
            <InputGroup>
                <Label htmlFor="isrc">ISRC Number (Optional)</Label>
                <Input
                id="isrc"
                type="text"
                placeholder="Enter ISRC Number here..."
                // Handle value and onChange as needed
                />
                <Label>
                Contains Explicit Lyrics
                <Checkbox type="checkbox" />
                <Slider />
                
                </Label>
            </InputGroup>
            <InputGroup>
                <Label htmlFor="isrc">Written by (Optional)</Label>
                <Input
                id="writtenBy"
                type="text"
                placeholder="Enter songwriter's name here..."
                // Handle value and onChange as needed
                />
            </InputGroup>
        </InputGroupColumn>
            
          <Button type="submit">+ Add Track</Button>
          
        </Form>
      </Container>
    );
  };
  
  export default TrackDetails;