import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@design'
//  images
import cancelSVG from '@legacy/assets/images/global/x_solid-circle.svg'

const SearchContainer = styled('div', {
  paddingBottom: '2rem',
  position: 'relative',
})

const SearchInput = styled('input', {
  border: 'none',
  backgroundColor: 'rgba(9, 19, 33, 0.06)',
  width: '100%',
  height: '48px',
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  paddingLeft: '0.8rem',
  paddingRight: '2rem',

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 -3px 0 0 $colors$primary',
  },
})

const ClearSearch = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '24px',
  cursor: 'pointer',
  marginTop: '1rem',
})

const ClearIcon = styled('img', {
  position: 'absolute',
  right: '-39px',
  top: '12px',
  cursor: 'pointer',
  filter: 'opacity(50%)',

  '&:hover': {
    filter: 'opacity(70%)',
  },
})

export default function SearchFilter({
  handleFilteredData,
  dataSet,
  searchableProperties,
}) {
  const [searchValue, setSearchValue] = useState('')

  const searchWithProperty = (property, dataValues, searchVal) => {
    if (dataValues[property]) {
      const lowerPropVal = dataValues[property].toLowerCase()
      const lowerSearchVal = searchVal.toLowerCase()
      return lowerPropVal.includes(lowerSearchVal)
    }
    return false
  }

  const filterData = (searchVal) => {
    setSearchValue(searchVal)
    let filteredData = []

    filteredData = dataSet.filter((dataValues) => {
      let foundInSearch = false
      //   Evaluate each searchable prop value against the search value
      searchableProperties.forEach((property) => {
        if (searchWithProperty(property, dataValues, searchVal)) {
          foundInSearch = true
        }
      })

      return foundInSearch
    })

    handleFilteredData(filteredData, searchVal)
  }

  const clearSearch = () => {
    setSearchValue('')
    handleFilteredData(dataSet)
  }

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search..."
        value={searchValue}
        onChange={(event) => filterData(event.target.value)}
      />
      {searchValue.length >= 1 && (
        <ClearIcon src={cancelSVG.src} onClick={() => clearSearch()} />
      )}
      {searchValue && searchValue.length >= 1 && (
        <ClearSearch onClick={clearSearch}>Clear Search</ClearSearch>
      )}
    </SearchContainer>
  )
}

SearchFilter.propTypes = {
  handleFilteredData: PropTypes.func.isRequired,
  dataSet: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      feature: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  searchableProperties: PropTypes.arrayOf(PropTypes.string).isRequired,
}
