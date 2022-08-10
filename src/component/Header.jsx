import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
  return (
    <header className='header'>
        <Link to="/">
        <h1>DAILY BULLETIN</h1>
        </Link>
    </header>
  )
}
