import React from 'react'
import NavBar from '../components/Navbar'
import { Typography } from 'antd'

const { Text } = Typography

const Home = (): JSX.Element => {
  return (
    <NavBar>
      <Text className="test">Hello world!</Text>
    </NavBar>
  )
}

export default Home
