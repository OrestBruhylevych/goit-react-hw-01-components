
import StatisticsList from "./statisticsList/statisticsList";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/transactionHistory";

import userInfo from '../data/user';
import data from '../data/data';
import friends from "../data/friends";
import transactionData from "../data/transactions";

import { Box } from "./box/Box";
import { Profile } from "./profile/Profile.jsx";





export const App = () => {
  return (
    <Box as="main" background='blue' pt='50px' pb='50px' >

      <Profile userInfo={userInfo}></Profile>

      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactionData} />
      
    </Box>
      
       

    
  );
};
