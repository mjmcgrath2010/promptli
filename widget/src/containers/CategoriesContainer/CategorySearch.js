import { h } from 'preact'
import { useState } from 'preact/hooks'
import SearchBar from '../../components/ui/SearchBar'
import { useDispatch } from 'react-redux'
import { filterCategories } from '../../actions/categories/actionCreators'

const CategorySearch = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    setValue(target.value)
    dispatch(filterCategories(target.value))
  }

  return <SearchBar value={value} onChange={handleChange} />
}

export default CategorySearch
