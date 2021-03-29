import { Pagination } from 'antd'
import Head from 'next/head'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>Movies App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Pagination defaultCurrent={1} total={10} />
    </div>
  )
}

export default Layout
