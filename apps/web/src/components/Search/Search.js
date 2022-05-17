import React, { useRef, useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import AsyncSelect from 'react-select/async'
import { AppContext } from '@app'
import isArrayEqual from '@utils/isArrayEqual'
import useSearch, { defaultQuery, formatResults } from '@hooks/useSearch'
import { SearchResult } from '../Search'

// TODO Refactor Search && useSearch with new query builder addition. Data shape has changed
const Search = ({
  name = 'search',
  focusOnMount = false,
  stylesOverrides = {},
  minChars = 3,
  placeholder = 'Search...',
  onSelectChange = () => {},
  onSelectBlur = () => {},
  onSelectFocus = () => {},
  query = defaultQuery,
  noOptionsMessage = () => 'No Results Found. Please try again...',
}) => {
  const { searchIndex } = useContext(AppContext)
  const search = useSearch(searchIndex)
  const [results, setResults] = useState([])
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const ref = useRef()
  const router = useRouter()

  const clearSearch = () => {
    setMenuIsOpen(false)
    setInputValue('')
  }

  const handleInputChange = (value) => {
    setInputValue(value)
  }

  const handleSelectChange = ({ value }) => {
    clearSearch()
    onSelectChange()
    router.push(value)
  }

  const handleSelectFocus = () => onSelectFocus()
  const handleSelectBlur = () => onSelectBlur()

  const loadOptions = (value, callback) => {
    if (value.length < minChars) return

    const searchResults = search(query(value))
    const formattedResults = searchResults.map((props) => formatResults(props))

    if (!isArrayEqual(results, formattedResults)) {
      setResults(formattedResults)
      callback(formattedResults)
    }
  }

  useEffect(() => {
    if (inputValue.length >= minChars && !menuIsOpen) {
      setMenuIsOpen(true)
    }

    if (inputValue.length < minChars && menuIsOpen) {
      setMenuIsOpen(false)
    }
  }, [inputValue])

  useEffect(() => {
    if (focusOnMount) {
      ref.current.focus()
    }
  }, [])

  return (
    <AsyncSelect
      ref={ref}
      instanceId={name}
      name={name}
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        LoadingIndicator: null,
        Option: SearchResult,
      }}
      styles={stylesOverrides}
      onChange={handleSelectChange}
      onFocus={handleSelectFocus}
      onBlur={handleSelectBlur}
      onInputChange={handleInputChange}
      cacheOptions
      placeholder={placeholder}
      loadOptions={loadOptions}
      noOptionsMessage={noOptionsMessage}
      menuIsOpen={menuIsOpen}
    />
  )
}

export default Search
