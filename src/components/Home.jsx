import React, { useEffect } from 'react'

import { Logo } from './Logo'
import { Search } from './Search'

export const Home = () => {
  return (
    <div className="flex items-center min-h-screen">
      <div className="flex flex-col items-center w-full mb-40">
        <div className="mb-8">
          <Logo />
        </div>
        <Search />
      </div>
    </div>
  )
}
