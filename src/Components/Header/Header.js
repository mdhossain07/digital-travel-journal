import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import './Header.css';

const Header = () => {
    return (
        <header>
            <PublicIcon fontSize = "small" className='icon'/>
            <p className='header--text'>my travel journal</p>
        </header>
    );
};

export default Header;