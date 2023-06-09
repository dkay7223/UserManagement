import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {
  return (
    <div className='home'>
      <Link to='/login' className='btn'>Login</Link>
      <Link to='/signup' className='btn'>Signup</Link>
    </div>
  );
};

export default Home;
