import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/sorts'

import { Card, Categories, SortPopup} from '../components'
import { getMovies, setCurrentPage } from '../redux/actions/movie'

const categoryName = [
    {name:'Фильмы', type: 'movie'}, 
    {name:'Сериалы', type:'tv'}
]

const sortName = [
  {name: 'Популярности', type: 'popularity', order: 'desc'},
  {name: 'Рейтингу', type: 'vote_average', order: 'desc'},
  {name: 'Дате выпуска', type: 'release_data', order: 'asc'},
]


const Home = () => {


  const { category, sortBy } = useSelector(({sorts}) => sorts )
  const {items, currentPage} = useSelector(({movie}) => movie)
  const pageRef = React.useRef(currentPage)

  const dispatch = useDispatch()

  const onSelectCategory = (item) => {
    dispatch(setCategory(item))
  }


  const onSelectSortType = (item) => {
    dispatch(setSortBy(item))
  }

  const onLoadeMore = () => {
    const page = currentPage + 1
    dispatch(getMovies(category, sortBy, page))
  }


  React.useEffect(() => {
    dispatch(getMovies(category, sortBy, pageRef.current))
  }, [category, sortBy])

  return <main className='main'>
    <div className='container'>
      <div className='catalog'>
        <div>
          <Categories activeCategory={category.type} onSelectCategory={onSelectCategory} items={categoryName} className='tabs-nav' />
        </div>
        <div>
          <SortPopup activeSortType={sortBy.type} onClickSortType={onSelectSortType} items={sortName} />
        </div>
      </div>
      <div className='cards'>
        {
          items.map(item => <Card key={item.id} {...item} />)
        }
      </div>
      <div  className='pagination'>
        <button onClick={onLoadeMore} className='load_more'>Загрузить еще</button>
      </div>
    </div>
  </main>
}

export default Home