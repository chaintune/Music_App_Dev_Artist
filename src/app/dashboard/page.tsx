import CommunityCard from "@/components/CommunityCard/CommunityCard";
import { CreateCard } from "@/components/CreateReleaseCard/CreateRelease";
import Layout from "@/components/Layout/Layout";
import { ManageCard } from "@/components/ManageReleaseCard/ManageRelease";
import StatisticsCard from "@/components/StatisticsCard/StatisticsCard";
import AlbumsCard from "@/components/TopAlbumsCard/AlbumsCard";

const Dashboard = () => {
    return (
        <Layout>
            <StatisticsCard />
            <div className="flex flex-row gap-[1vw] mx-[2vw] mt-[1vw]">
                <CreateCard />
            </div>
            <div className="flex flex-row gap-[1vw] mx-[2vw] my-[1vw]">
                <AlbumsCard />
                <CommunityCard />
                <ManageCard />
            </div>
        </Layout>
    );
}

export default Dashboard;