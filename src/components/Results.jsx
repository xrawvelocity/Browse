import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../context/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
  const {
    getYoutubeResults,
    youtubeResults,
    getResults,
    results,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
  } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getYoutubeResults(searchTerm)
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loading />
  switch (location.pathname) {
    case '/search':
      return (
        <div
          className="flex flex-wrap mt-6 justify-between space-y-6 sm:px-56"
          style={{ paddingLeft: '210px', width: '70%' }}
        >
          {results?.results?.map(({ link, title, description }, index) => {
            return (
              <div key={index} className="w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                  <p className="text-md">{description}</p>
                </a>
              </div>
            )
          })}
        </div>
      )
    case '/images':
      return (
        <div
          className="flex flex-wrap items-center"
          style={{ paddingLeft: '210px' }}
        >
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => {
              return (
                <a
                  className="sm:p-3 p-5"
                  href={href}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={image?.src} alt={title} loading="lazy" />
                  <p className="w-36 break-words text-sm mt-2">{title}</p>
                </a>
              )
            }
          )}
        </div>
      )
    case '/news':
      return (
        <div
          className="flex flex-wrap mt-6 justify-between space-y-6 sm:px-56 items-center"
          style={{ paddingLeft: '210px', width: '70%' }}
        >
          {results?.entries?.map(({ links, title, id, source }) => {
            return (
              <div key={id} className="w-full">
                <a
                  href={links?.[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                  <div className="flex gap-4">
                    <a href={source?.href} target="_blank" rel="noreferrer">
                      {source?.href}
                    </a>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      )
    case '/videos':
      return (
        <div className="flex flex-wrap" style={{ paddingLeft: '210px' }}>
          {youtubeResults?.items?.map(({ url, title }, index) => {
            return (
              <div key={index} className="p-2">
                <ReactPlayer url={url} controls width="355px" height="200px" />
              </div>
            )
          })}
        </div>
      )

    default:
      return 'ERROR!'
  }
}
