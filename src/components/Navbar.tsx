import React from 'react'
import { Layout, Menu } from 'antd'
import { useStaticQuery, Link, graphql } from 'gatsby'

const { Header } = Layout

interface NavBarProps {
  children: JSX.Element
}

const NavBar = ({ children }: NavBarProps): JSX.Element => {
  const data = useStaticQuery(
    graphql`
      query {
        allNavlinksJson {
          edges {
            node {
              linkName
            }
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <Layout>
      <Header className="navbar-header">
        <div className="logo" />
        <Menu
          className="navbar-menu"
          mode="horizontal"
          defaultSelectedKeys={['0']}
        >
          {data.allNavlinksJson.edges.map((edge, index) => (
            <Menu.Item className="navbar-link" key={index}>
              {edge.node.linkName}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <div>{children}</div>
    </Layout>
  )
}

export default NavBar
