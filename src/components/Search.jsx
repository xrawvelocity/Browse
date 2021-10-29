import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useResultContext } from '../context/ResultContextProvider'
import clsx from 'clsx'

export const Search = () => {
  const { searchTerm, setSearchTerm } = useResultContext()
  const [value, setValue] = useState('')
  const history = useHistory()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (value === '') {
          return
        }
        setSearchTerm(value)
      }}
      className="flex"
      style={{
        overflow: 'hidden',
        flexDirection: isHome ? 'column' : 'row',
      }}
    >
      <input
        type="text"
        defaultValue={searchTerm}
        placeholder="Type something to surf the web"
        onChange={(e) => setValue(e.target.value)}
        className="pl-4 py-2 text-black dark:bg-gray-700 dark:text-white"
        style={{ width: '400px' }}
        required
      />
      <button
        type="submit"
        className={clsx(
          'dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-white hover:bg-gray-200 px-4',
          isHome &&
            'mt-5 text-white bg-blue-600 p-2 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 '
        )}
        onClick={() => {
          if (value === '') {
            return
          } else if (isHome) {
            history.push('/search')
          }
          setSearchTerm(value)
        }}
      >
        {isHome ? 'Search' : '🔎'}
      </button>
    </form>
  )
}
