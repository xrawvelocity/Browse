import clsx from 'clsx'
import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Search } from './Search'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  const location = useLocation()
  return (
    <div className="flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 mb-5">
      <div className="flex flex-col" style={{ width: '100%' }}>
        <div
          className="flex justify-between items-center space-x-5 p-14 py-5"
          style={{ width: '100%' }}
        >
          <div className="flex">
            <Link to="/" style={{ marginRight: '25px' }}>
              <Logo sm={true} />
            </Link>
            <Search />
          </div>
          <button
            type="button"
            onClick={() => setDarkTheme((prev) => !prev)}
            className="text-md dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-4 py-2 hover:shadow-lg"
          >
            {darkTheme ? 'Light ☀️' : 'Dark 🌙'}
          </button>
        </div>
        <div className="flex space-x-4 pt-2" style={{ paddingLeft: '210px' }}>
          <Link to="/search">
            <p
              className={
                location.pathname === '/search'
                  ? 'border-b-2 border-blue-600'
                  : ''
              }
            >
              All
            </p>
          </Link>
          <Link to="/images">
            <p
              className={
                location.pathname === '/images'
                  ? 'border-b-2 border-blue-600'
                  : ''
              }
            >
              Images
            </p>
          </Link>
          <Link to="/videos">
            <p
              className={
                location.pathname === '/videos'
                  ? 'border-b-2 border-blue-600'
                  : ''
              }
            >
              Videos
            </p>
          </Link>
          <Link to="/news">
            <p
              className={
                location.pathname === '/news'
                  ? 'border-b-2 border-blue-600'
                  : ''
              }
            >
              News
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
