import { Layout, Typography, Row, Col, Input, Button, Menu, Breadcrumb, Dropdown } from 'antd'

import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'
import LayoutPage from './Layout'

const { Search } = Input
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu
const onSearch = (value) => console.log(value)
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Popular
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Now Playing
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Upcoming
      </a>
    </Menu.Item>
  </Menu>
)

const Nav = () => {
  return (
    <Layout>
      <Header>
        <div className={navStyles.logo}>
          <Image src="/cinema.svg" height={50} width={50} />
        </div>
        <Dropdown overlay={menu}>
          <Button type="text" style={{ color: '#fff' }}>
            Movies
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button type="text" style={{ color: '#fff' }}>
            More
          </Button>
        </Dropdown>
        <div className={navStyles.search}>
          <Search
            style={navStyles.nav}
            placeholder="find movie"
            allowClear
            onSearch={onSearch}
            style={{ width: 300 }}
          />
        </div>
      </Header>
    </Layout>
  )
}

export default Nav
