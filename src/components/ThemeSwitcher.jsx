import React from 'react'
import {Button} from 'react-bootstrap'
import { useThemeContext } from "../contexts/ThemeContext"

const ThemeSwitcher = () => {
  const {toggleTheme} = useThemeContext()
  return (
    <Button variant='danger'  size="sm" onClick={toggleTheme} >Theme Switch</Button>
  )
}

export default ThemeSwitcher
