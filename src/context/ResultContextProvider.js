import React, { useContext, createContext, useState } from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
  const [youtubeResults, setYoutubeResults] = useState([])
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [darkTheme, setDarkTheme] = useState(true)

  const getResults = async (type) => {
    setIsLoading(true)

    try {
      const response = await fetch(`${baseUrl}${type}&lr=lang_en&hl=en&cr=US`, {
        method: 'GET',
        headers: {
          'x-user-agent': 'desktop',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        },
      })

      const data = await response.json()
      setResults(data)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError(true)
      console.log(err)
    }
  }

  const getYoutubeResults = async (term) => {
    setIsLoading(true)

    try {
      const response = await fetch(
        `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${term}&lr=lang_en&hl=en&cr=US`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )

      const data = await response.json()
      setYoutubeResults(data)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError(true)
      console.log(err)
    }
  }

  return (
    <ResultContext.Provider
      value={{
        getYoutubeResults,
        youtubeResults,
        getResults,
        results,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
