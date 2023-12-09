import CommunityCard from "@/components/CommunityCard/CommunityCard";
import { CreateCard  } from "@/components/CreateReleaseCard/CreateRelease";
import { ManageCard } from "@/components/ManageReleaseCard/ManageRelease";
import StatisticsCard from "@/components/StatisticsCard/StatisticsCard";
import AlbumsCard from "@/components/TopAlbumsCard/AlbumsCard";

const Dashboard = () => {
    return ( 
        <div className="h-screen w-screen flex items-center justify-center">
            {/* <CreateCard />
            <ManageCard />
            <CommunityCard /> */}
            {/* <AlbumsCard /> */}
            <StatisticsCard/>
        </div>
     );
}
 
export default Dashboard;