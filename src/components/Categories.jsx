import React from 'react'
import classNames from 'classnames'


const Categories = ({ items, activeCategory, onSelectCategory }) => {
  return <div  className={classNames('nav')}>
    <ul>
      {
        items.map((item) => 
          <li
            className={ activeCategory === item.type ? 'active' : '' }
            onClick={() => onSelectCategory(item)}
            key={item.type} >
            {item.name}
          </li>
        )
      }
    </ul>
  </div>
}


export default Categories
