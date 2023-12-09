import CommunityCard from "@/components/CommunityCard/CommunityCard";
import { CreateCard } from "@/components/CreateReleaseCard/CreateRelease";
import Layout from "@/components/Layout/Layout";
import { ManageCard } from "@/components/ManageReleaseCard/ManageRelease";
import StatisticsCard from "@/components/StatisticsCard/StatisticsCard";
import AlbumsCard from "@/components/TopAlbumsCard/AlbumsCard";

const Dashboard = () => {
    return (
        <Layout>
            <CreateCard />
            <ManageCard />
            <CommunityCard />
            <AlbumsCard />
            <StatisticsCard />
        </Layout>
    );
}

export default Dashboard;