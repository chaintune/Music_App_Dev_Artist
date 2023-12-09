import TopTracks from '@/components/topTracksCard/TopTracks'
import NFTCollection from '@/components/nftCard/NFTCollection'
import ArtistBar from "@/components/ArtistBar"
import DiscoverArtist from "@/components/discoverArtistCard/discoverArtist"

const Home_page = () => {
  return ( 
    <div>
      <ArtistBar/>
      <TopTracks/>
      <NFTCollection/>
      <DiscoverArtist/>
      
    </div>
   );
}
 
export default Home_page;