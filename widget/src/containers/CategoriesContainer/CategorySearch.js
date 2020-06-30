import { h } from 'preact'
import { useState } from 'preact/hooks'
import SearchBar from '../../components/ui/SearchBar'

const CategorySearch = () => {
  const [value, setValue] = useState('')

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  return <SearchBar value={value} onChange={handleChange} />
}

export default CategorySearch
