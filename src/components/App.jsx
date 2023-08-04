import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from './Profile/user.json';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div
    // style={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};