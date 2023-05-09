//USE RFCE
import React from 'react';
import logoImg from './imgs/16-167642_amazon-logo-amazon-logo-white-text.png';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}] = useStateValue();
    
    const login = () => {
        auth.signOut();
    }
    return (
        <nav className='header'>
            {/* LOGO ON THE LEFT -> IMG */}
            <Link to='/'>
                <img className='header__logo' src={logoImg} alt='logo' />
            </Link>

            {/* SEARCH BOX */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 LINKS */}
            <div className="header__nav">
                {/* 1ST LINK */}
                <Link to={!user && "/login"} className='header__link'>
                    <div onClick={login} className="header__option">
                        <span className='header__optionLineOne'>Hello {user?.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/* 2ND LINK */}
                <Link to="/" className='header__link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                {/* 3RD LINK */}
                <Link to="/" className='header__link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                {/* 4TH LINK */}
                <Link to="/checkout" className='header__link'>
                    <div className="header_optionBasket">
                        {/* SHOPPING BASKET ICON */}
                        <ShoppingBasketIcon />
                        {/* Number of items in basket */}
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>


            </div>

        </nav>


    );
}

export default Header;
