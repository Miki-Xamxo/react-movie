import React from 'react'

import filmSvg from '../assets/film.svg'
import searchSvg from '../assets/search.svg'

const Header = () => {
  return   <header className='header'>
    <div className='header__content'>
      <div className='header__menu'>
        <div className='header__nav'>
          <div className='logo'>
            <img src={filmSvg} alt=""/>
            <span>Kinoflix</span>
          </div>
        </div>
        <div className='header__action'>
          <ul>
            <li>
              <div className='search-form'>
                <form  action="#">
                  <input type="text" placeholder='Поиск фильмов или сериалов'/>
                  <div className='btn-search'>
                    <div className='btn-delimiter'></div>
                    <img src={searchSvg} alt=""/>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
  
    </div>
  </header>
}

export default Header