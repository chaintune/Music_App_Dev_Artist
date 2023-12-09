import CommunityCard from "@/components/CommunityCard/CommunityCard";
import { CreateCard  } from "@/components/CreateReleaseCard/CreateRelease";
import { ManageCard } from "@/components/ManageReleaseCard/ManageRelease";

const Dashboard = () => {
    return ( 
        <div className="h-screen w-screen flex items-center justify-center">
            <CreateCard />
            <ManageCard />
            <CommunityCard />
        </div>
     );
}
 
export default Dashboard;