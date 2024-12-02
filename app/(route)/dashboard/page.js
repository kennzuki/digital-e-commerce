import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserListing from './_components/UserListing';

const Dashboard = () => {
  return (
    <div className='mt-16'>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <Tabs defaultValue='account' className=' mt5'>
        <TabsList>
          <TabsTrigger value='listing'>Listing</TabsTrigger>
          <TabsTrigger value='purchase'>Profile</TabsTrigger>
        </TabsList>
        <TabsContent value='listing'>
          <UserListing />
        </TabsContent>
        <TabsContent value='purchase'>Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
