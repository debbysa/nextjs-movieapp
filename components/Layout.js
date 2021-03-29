import Nav from './Nav'
import Head from 'next/head'
import layoutStyles from '../styles/Layout.module.css'
import { Pagination } from 'antd'

const Layout = ({ children, home }) => {
  return (
    // <>
    //   <Nav />
    //   <div>
    //     <main className={layoutStyles.main}>{children}</main>
    //     <Pagination defaultCurrent={1} total={10} />
    //   </div>
    // </>
    <div className={layoutStyles.container}>
      <Head>
        <title>Movies App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout
