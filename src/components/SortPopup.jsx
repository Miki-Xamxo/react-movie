import React from 'react'

import dropDownSvg from '../assets/drop-down.svg'

const SortPopup = ({ items, activeSortType, onClickSortType }) => {

  const [visiblePopup, setVisiblePopup] = React.useState(false)

  const activeLabel = items.find(item => item.type === activeSortType).name

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  return <div className='sort'>
    <div className='sort__label'>
      <img className={ visiblePopup ? 'rotate' : ''} src={dropDownSvg} alt=""/>
      <b>Сортировка по:</b>
      <span onClick={toggleVisiblePopup}>{activeLabel}</span>
    </div>
    {
      visiblePopup && <div className='sort__popup'>
      <ul>
        {
          items.map(item => 
            <li
              className={activeSortType === item.type ? 'active' : ''}
              onClick={() => onClickSortType(item)}
              key={item.type}>
              {item.name}
            </li>
          )
        }
      </ul>
    </div>
    }
  </div>
}


export default SortPopup