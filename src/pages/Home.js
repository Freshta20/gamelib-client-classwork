import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to GameLib.biz</h1>
      <Link to={'/games'}>Games</Link>
    </div>
  );
}

export default Home;
