import clsx from 'clsx'
import React from 'react'
import { useResultContext } from '../context/ResultContextProvider'

export const Logo = ({ sm = false }) => {
  const { setSearchTerm } = useResultContext()
  return (
    <h1
      className={clsx(
        'w-auto inline text-center font-bold dark:text-white h1y-6 px-2 text-gray-800',
        sm ? 'text-3xl' : 'text-6xl'
      )}
      style={{ fontFamily: 'Open Sans', cursor: 'pointer' }}
      onClick={() => setSearchTerm('')}
    >
      <span className="text-blue-500">B</span>
      <span className="text-red-500">r</span>
      <span className="text-yellow-500">o</span>
      <span className="text-blue-500">w</span>
      <span className="text-green-500">s</span>
      <span className="text-red-500">e</span>
    </h1>
  )
}
