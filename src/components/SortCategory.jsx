import React from 'react'

const SortCategory = ({ items }) => {
  return  <div className='sort__category'>
    <ul>
      {
        items.map((item, index) => <li key={`${item}_${index}`}>{item}</li>)
      }
    </ul>
  </div>
}

export default SortCategory
