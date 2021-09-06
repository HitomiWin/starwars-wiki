import {createContext, useContext, useState } from 'react'

export const ThemeContext=createContext()

export const useThemeContext = () => {
	return useContext(ThemeContext)
}


const ThemeContextProvider=(props)=>{

  const [theme, setTheme] = useState('dark')
  
  const toggleTheme = setTheme(theme==='dark'?'light':'dark')

  const values={
    theme,
    toggleTheme,
  }

  return(
    <ThemeContext.Provider value={values}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export default ThemeContextProvider