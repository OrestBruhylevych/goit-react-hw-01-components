
import Profile from "./profile/profile";
import StatisticsList from "./statisticsList/statisticsList";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/transactionHistory";

import userInfo from '../data/user';
import data from '../data/data';
import friends from "../data/friends";
import transactionData from "../data/transactions";





export const App = () => {
  return (
    <>
      
       <Profile
          username={userInfo.username}
          tag={userInfo.tag}
          location={userInfo.location}
          avatar={userInfo.avatar}
          stats={userInfo.stats}
      />

      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactionData} />

    </>
  );
};
