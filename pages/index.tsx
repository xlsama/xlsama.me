import Header from 'components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import css from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
      <Header />
      <main className={css.home}>
        <h2 className={css.content}>以后再说</h2>
      </main>
    </>
  )
}

export default Home
