import React, { useState } from 'react'

import { Routes } from './components/Routes'
import { useResultContext } from './context/ResultContextProvider'

export const App = () => {
  const { darkTheme } = useResultContext()
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Routes />
      </div>
    </div>
  )
}
