'use client'
<<<<<<< HEAD

=======
>>>>>>> origin/main
import React, { useCallback, useState } from 'react';
import {Container, NFTList, TextArea, Form,InputGroupColumn, Input, InputGroup, Label, Select, Button, ToggleSwitch, Slider, SliderContainer, Checkbox} from "../../../styles/TrackDetails/style"
import {DropArea, Instructions, FileInput} from "../../../styles/CoverArt/style"
import upload from '../../../assets/upload.svg'
import Image from 'next/image'
import { ScrollContainer } from '../RevenueCard/style';
import CoverArt from '../CoverArt/CoverArt';

type NFT = {
  id: number;
  name: string;
  description: string;
  image: any;
};

interface TrackDetailsProps{
    selected:string;
}

const TrackDetails: React.FC<TrackDetailsProps> = (props) => {
    const [trackName, setTrackName] = useState('');
    const [albumName, setAlbumName] = useState('');
    const [description, setDescription] = useState('');
    const [nfts, setNfts] = useState<NFT[]>([
      // Pre-populated for example purposes
      {
        id: 1,
        name: 'Nothing Happens #1',
        description: 'Description of NFT',
        image: '/testing/dabba.svg',
      },
      {
        id: 2,
        name: 'Nothing Happens #2',
        description: 'Description of NFT',
        image: '/testing/dabba.svg',
      },{
        id: 3,
        name: 'Nothing Happens #3',
        description: 'Description of NFT',
        image: '/testing/dabba.svg',
      },{
        id: 14,
        name: 'Nothing Happens #14',
        description: 'Description of NFT',
        image: '/testing/dabba.svg',
      },
    ]);
    
    const handleRemoveNFT = (id: number) => {
      // Implement the logic to remove an NFT from the collection
      setNfts(currentNfts => currentNfts.filter(nft => nft.id !== id));
    };
    
    const handleSingleSongSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Handle the form submission
    };
    
    const handleAlbumSongSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Handle the form submission
    };

    const handleAlbumSubmit = (event: React.FormEvent) => {
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
      <Form>
      {
        (props.selected =="single") ?
      <></>:
      <Container>
        <div style={{fontFamily: 'Aileron',fontSize: '2vw',fontWeight: '300',color:'white'}}>Album Description</div>
        <InputGroupColumn style={{gridTemplateColumns:'1fr 2fr'}}>
        
        <InputGroup>
        <Label> Album Cover Art</Label>
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
            <span style={{opacity:0.6}}>.png and .jpg files with 1:1 aspect ratio up to 10mb are supported. ChainTune recommends 1080px or more for best quality.</span>
        </Instructions>
      </DropArea>
        </InputGroup>
        <InputGroup>

          <Label htmlFor="albumName">Name</Label>
          <Input
            id="albumName"
            type="text"
            value={albumName}
            onChange={e => setAlbumName(e.target.value)}
            placeholder="Enter album name..."
          />
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter description here..."
          //   style={{height:'8vw'}}
          />
          </InputGroup>
      
      </InputGroupColumn>
      </Container>
      
      }

      <Container>
        <div style={{fontFamily: 'Aileron',fontSize: '2vw',fontWeight: '300',color:'white'}}>Track Details</div>
        <Form onSubmit={(props.selected =="single") ? handleSingleSongSubmit: handleAlbumSongSubmit}>
        <InputGroupColumn style={{gridTemplateColumns:'1fr 2fr'}}>
        
          <InputGroup>
          <Label> Upload Track Cover</Label>
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
              <span style={{opacity:0.6}}>.png and .jpg files with 1:1 aspect ratio up to 10mb are supported. ChainTune recommends 1080px or more for best quality.</span>
          </Instructions>
        </DropArea>
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
            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter description here..."
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
                    <Label htmlFor="isrc">ISRC Number (Optional)</Label>
                    <Input
                    id="isrc"
                    type="text"
                    placeholder="Enter ISRC Number here..."
                    />    
                      <Label>
                    <div style={{display:'flex'}}>

                      <span style={{fontSize:'1.5vw'}}>Contains Explicit Lyrics</span>
                      <SliderContainer>
                      <Checkbox type="checkbox" />
                      <Slider />
                      </SliderContainer>
                    </div>
                      </Label>
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
                    <Label htmlFor="writtenby">Written by (Optional)</Label>
                    <Input
                    id="writtenBy"
                    type="text"
                    placeholder="Enter songwriter's name here..."
                    />
                    <Label>
                    <div style={{display:'flex'}}>

                      <span style={{fontSize:'1.5vw'}}>Radio Edit</span>
                      <SliderContainer>
                      <Checkbox type="checkbox" />
                      <Slider />
                      </SliderContainer>
                    </div>
                      </Label>
                </InputGroup>
            </InputGroupColumn>
            </div>
        </InputGroupColumn>
            <br/>
            {
              (props.selected =="single") ?
              <div style={{display:'flex',alignItems:'center',justifyContent: 'center'}}><Button type="submit">Publish Track</Button></div>
              :
              <div style={{display:'flex',alignItems:'center',justifyContent: 'center'}}><Button type="submit">+ Add Track</Button></div>
            }
          
        </Form>
      </Container>
      {
        (props.selected =="single") ? 
        <></>:
      <Container>
        <NFTList>
      
            {nfts.map(nft => (
                <div key={nft.id} style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,alignItems:`center`,height:`112px`,borderRadius:`16px`,width:`100%`,background: `#26282C66`    ,padding:`8px`,marginTop:`8px`}}>
                    <img src={nft.image} style={{width:`96px`, height:`96px`}} />
                    <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`, alignItems:`center`, width:`85%`, margin:`12px`}}>
                    <div>
                            <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full">{nft.name}</p>
                            <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full" style={{marginTop:`8px`,opacity:`0.6`}}>{nft.description}</p>
                        </div>
                        <div>
                        <div className="  bg-[linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between w-full h-12 items-start pt-3 px-4 hover:border rounded-[24px]">
                            <button className="text-sm font-['Aileron'] leading-[20px] text-white border-2 border-transparent bg-[linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%)]"
                            onClick={() => handleRemoveNFT(nft.id)}
                            >
                                Remove
                            </button>
                        </div>
                        

                        </div>
                    </div>
                </div>
            ))}
        
        </NFTList>
        <br/>
        <div style={{display:"flex",justifyContent:"flex-end"}}><Button type="submit">Publish Album</Button></div>
      </Container>
      }
      </Form> 
    );
  };
  
  export default TrackDetails;